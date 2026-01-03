#!/usr/bin/env python3
"""
Screen Organization & Flow Analyzer
Analyzes all 1,103 screens and generates:
1. App-wise screen categorization
2. Hierarchical flow structure
3. Mermaid diagrams for each main screen
4. Complete UX navigation maps
"""

import os
import json
import re
from pathlib import Path
from collections import defaultdict

# Base directory
PAGES_DIR = Path("rez-app/src/pages")

# App mapping based on folder structure
APP_CATEGORIES = {
    "ReZ (Customer App)": {
        "folders": ["RezUI", "user", "wallet", "earn", "social"],
        "root_patterns": ["Home.jsx", "Explore.jsx", "Profile.jsx", "Cart.jsx", "Earn.jsx",
                         "Wallet.jsx", "SocialHub.jsx", "LoyaltyHub.jsx", "Deals.jsx"]
    },
    "ReZ Prive (Premium)": {
        "folders": ["prive"],
        "root_patterns": ["RezPrive.jsx"]
    },
    "BizOne (Merchant OS)": {
        "folders": ["merchant", "partner"],
        "root_patterns": []
    },
    "HQ Admin": {
        "folders": ["admin"],
        "root_patterns": []
    },
    "Wasil Distribution Apps": {
        "folders": ["wasil"],
        "subfolders": ["dinezy", "grocify", "glowzy", "mediearn", "fitearn", "shopazy",
                      "funzy", "autoperks", "petzy", "kidzo", "luxora", "elitezy", "royale",
                      "gamezy", "essentia", "bizora", "learnly", "maidzy", "society",
                      "travopay", "washzy", "wellnez"]
    },
    "Growth Stack": {
        "folders": ["growth"],
        "subfolders": ["buzzloop", "coinhunt", "referralx", "inviteloop", "quizzy",
                      "spinwin", "contests", "challenges", "leaderboards", "dailystreak",
                      "squadgoals", "shareearn", "campusconnect", "corpperks"]
    },
    "Discovery Layer": {
        "folders": ["ai", "air", "buzzloop", "coinhunt", "localedge"],
        "root_patterns": []
    },
    "Category-Specific": {
        "folders": ["grocery", "fashion", "beauty", "healthcare", "fitness", "events",
                   "experience", "creator", "financial", "exclusive", "corporate",
                   "lifestyle", "stores", "mall", "home-services", "homehub",
                   "explore", "stylesync", "techhunt", "fitcircle", "cashstore",
                   "contests", "college"],
        "root_patterns": []
    },
    "Shared/Common": {
        "folders": ["SharedUI", "support"],
        "root_patterns": ["Splash.jsx", "Onboarding.jsx", "Login.jsx", "OTPVerify.jsx",
                         "ForgotPassword.jsx", "Help.jsx", "Privacy.jsx", "Terms.jsx"]
    }
}

def find_all_screens():
    """Find all JSX/TSX files in pages directory"""
    screens = []
    for ext in ['jsx', 'tsx']:
        screens.extend(PAGES_DIR.rglob(f'*.{ext}'))
    return sorted(screens)

def categorize_screens(screens):
    """Categorize screens by app"""
    categorized = defaultdict(list)

    for screen in screens:
        relative_path = screen.relative_to(PAGES_DIR)
        parts = list(relative_path.parts)

        # Determine app category
        if len(parts) == 1:
            # Root level screen
            screen_name = parts[0]
            assigned = False

            for app, config in APP_CATEGORIES.items():
                if screen_name in config.get("root_patterns", []):
                    categorized[app].append(screen)
                    assigned = True
                    break

            if not assigned:
                categorized["ReZ (Customer App)"].append(screen)
        else:
            # Nested screen
            folder = parts[0]
            assigned = False

            for app, config in APP_CATEGORIES.items():
                if folder in config.get("folders", []):
                    categorized[app].append(screen)
                    assigned = True
                    break

            if not assigned:
                categorized["Uncategorized"].append(screen)

    return categorized

def analyze_screen_content(screen_path):
    """Analyze screen content to determine navigation links"""
    try:
        with open(screen_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find navigation links
        navigate_patterns = [
            r"navigate\(['\"]([^'\"]+)['\"]",
            r"<Link to=['\"]([^'\"]+)['\"]",
            r"href=['\"]([^'\"]+)['\"]",
        ]

        links = []
        for pattern in navigate_patterns:
            matches = re.findall(pattern, content)
            links.extend(matches)

        # Identify screen type
        screen_type = "Standard"
        if "Modal" in content or "Dialog" in content:
            screen_type = "Modal"
        elif "Drawer" in content or "Sidebar" in content:
            screen_type = "Drawer"
        elif "Tab" in content:
            screen_type = "Tab View"

        # Find imports to understand dependencies
        imports = re.findall(r"from ['\"]([^'\"]+)['\"]", content)

        return {
            "links": list(set(links)),
            "type": screen_type,
            "imports": imports[:10]  # First 10 imports
        }
    except Exception as e:
        return {"links": [], "type": "Unknown", "imports": [], "error": str(e)}

def generate_app_structure():
    """Generate complete app structure with metadata"""
    screens = find_all_screens()
    categorized = categorize_screens(screens)

    result = {
        "total_screens": len(screens),
        "apps": {}
    }

    for app_name, app_screens in sorted(categorized.items()):
        app_data = {
            "screen_count": len(app_screens),
            "screens": []
        }

        for screen in sorted(app_screens):
            relative_path = screen.relative_to(PAGES_DIR)
            screen_info = analyze_screen_content(screen)

            app_data["screens"].append({
                "name": screen.stem,
                "path": str(relative_path),
                "full_path": str(screen),
                "type": screen_info["type"],
                "navigates_to": screen_info["links"][:5],  # Top 5 links
            })

        result["apps"][app_name] = app_data

    return result

def generate_mermaid_for_app(app_name, app_data):
    """Generate Mermaid diagram for an app"""
    mermaid = [
        f"```mermaid",
        f"graph TD",
        f"    %% {app_name} - Screen Navigation Flow",
        f"    %% Total Screens: {app_data['screen_count']}",
        f""
    ]

    # Group screens by category
    categories = defaultdict(list)
    for screen in app_data['screens']:
        path_parts = Path(screen['path']).parts
        if len(path_parts) > 1:
            category = path_parts[0]
        else:
            category = "Root"
        categories[category].append(screen)

    node_id = 0
    node_map = {}

    # Generate nodes
    for category, screens in sorted(categories.items()):
        mermaid.append(f"    %% {category.upper()} SECTION")

        for screen in screens:
            node_id += 1
            node_name = f"S{node_id}"
            node_map[screen['name']] = node_name

            label = screen['name'].replace('Page', '').replace('Screen', '')
            screen_type_indicator = {
                "Modal": "{{",
                "Drawer": "[/",
                "Tab View": "[(",
                "Standard": "["
            }.get(screen['type'], "[")

            closing = {
                "Modal": "}}",
                "Drawer": "/]",
                "Tab View": "])",
                "Standard": "]"
            }.get(screen['type'], "]")

            mermaid.append(f"    {node_name}{screen_type_indicator}\"{label}\"{closing}")

        mermaid.append("")

    # Generate edges (limited to avoid overcrowding)
    mermaid.append("    %% NAVIGATION FLOWS")
    edges_added = 0
    max_edges = 50  # Limit edges to keep diagram readable

    for screen in app_data['screens']:
        if screen['name'] in node_map and edges_added < max_edges:
            source = node_map[screen['name']]
            for link in screen.get('navigates_to', []):
                # Try to match link to screen name
                for target_screen in app_data['screens']:
                    if target_screen['name'].lower() in link.lower() and target_screen['name'] in node_map:
                        target = node_map[target_screen['name']]
                        mermaid.append(f"    {source} --> {target}")
                        edges_added += 1
                        if edges_added >= max_edges:
                            break
                if edges_added >= max_edges:
                    break

    mermaid.append("```")
    mermaid.append("")

    return "\n".join(mermaid)

def generate_markdown_documentation(structure):
    """Generate complete markdown documentation"""

    doc = [
        "# RTMN Complete Screen Organization & Navigation Flows",
        "",
        f"**Total Screens:** {structure['total_screens']}",
        f"**Generated:** {Path.cwd()}",
        "",
        "## Table of Contents",
        ""
    ]

    # TOC
    for i, app_name in enumerate(sorted(structure['apps'].keys()), 1):
        doc.append(f"{i}. [{app_name}](#{app_name.lower().replace(' ', '-').replace('(', '').replace(')', '')})")

    doc.append("")
    doc.append("---")
    doc.append("")

    # App sections
    for app_name, app_data in sorted(structure['apps'].items()):
        doc.append(f"## {app_name}")
        doc.append("")
        doc.append(f"**Total Screens:** {app_data['screen_count']}")
        doc.append("")

        # Mermaid diagram
        doc.append("### Navigation Flow Diagram")
        doc.append("")
        doc.append(generate_mermaid_for_app(app_name, app_data))

        # Screen list grouped by subcategory
        doc.append("### Screen Inventory")
        doc.append("")

        # Group by path
        by_category = defaultdict(list)
        for screen in app_data['screens']:
            path_parts = Path(screen['path']).parts
            if len(path_parts) > 1:
                category = ' / '.join(path_parts[:-1])
            else:
                category = "Root Level"
            by_category[category].append(screen)

        for category, screens in sorted(by_category.items()):
            doc.append(f"#### {category}")
            doc.append("")
            doc.append("| Screen | Type | Navigates To |")
            doc.append("|--------|------|--------------|")

            for screen in sorted(screens, key=lambda x: x['name']):
                links = ", ".join(screen.get('navigates_to', [])[:3]) or "—"
                doc.append(f"| {screen['name']} | {screen['type']} | {links} |")

            doc.append("")

        doc.append("---")
        doc.append("")

    return "\n".join(doc)

def main():
    print("🔍 Analyzing all screens in rez-app/src/pages...")

    structure = generate_app_structure()

    print(f"\n✅ Found {structure['total_screens']} screens")
    print(f"📱 Organized into {len(structure['apps'])} app categories")

    print("\n📊 Screen Distribution:")
    for app_name, app_data in sorted(structure['apps'].items(),
                                     key=lambda x: x[1]['screen_count'],
                                     reverse=True):
        print(f"   {app_name:30} {app_data['screen_count']:4} screens")

    # Generate documentation
    print("\n📝 Generating documentation...")
    doc_content = generate_markdown_documentation(structure)

    # Save documentation
    output_file = Path("COMPLETE_SCREEN_ORGANIZATION_AND_FLOWS.md")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(doc_content)

    print(f"\n✅ Documentation saved to: {output_file}")

    # Save JSON structure for further processing
    json_file = Path("screen_structure.json")
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(structure, f, indent=2)

    print(f"✅ JSON structure saved to: {json_file}")
    print("\n🎉 Analysis complete!")

if __name__ == "__main__":
    main()
