#!/usr/bin/env python3
"""
Enhanced Screen Flow Generator
Creates detailed Mermaid diagrams for each main screen showing:
- Entry points
- Sub-screens branching
- Modal/drawer relationships
- Cross-app navigation
"""

import json
from pathlib import Path
from collections import defaultdict

def load_structure():
    """Load the generated screen structure"""
    with open('screen_structure.json', 'r') as f:
        return json.load(f)

def identify_main_screens(app_screens):
    """Identify main/entry screens vs sub-screens"""
    main_screens = []
    sub_screens = defaultdict(list)

    entry_keywords = ['Home', 'Dashboard', 'Main', 'Index', 'Landing', 'Hub']

    for screen in app_screens:
        screen_name = screen['name']
        is_main = any(keyword in screen_name for keyword in entry_keywords)

        # Check if it's at root level of its category
        path_parts = Path(screen['path']).parts
        if len(path_parts) == 1 or is_main:
            main_screens.append(screen)
        else:
            category = path_parts[0] if len(path_parts) > 1 else 'general'
            sub_screens[category].append(screen)

    return main_screens, sub_screens

def generate_detailed_mermaid(app_name, screens):
    """Generate detailed Mermaid diagram with hierarchical flows"""

    main_screens, sub_screens = identify_main_screens(screens)

    lines = [
        f"### {app_name} - Detailed Navigation Flow",
        "",
        "```mermaid",
        "graph TB",
        f"    %% {app_name}",
        f"    %% Total: {len(screens)} screens",
        ""
    ]

    # Group main screens by functional area
    functional_areas = defaultdict(list)
    for screen in main_screens:
        # Determine functional area from name
        name_lower = screen['name'].lower()
        if any(x in name_lower for x in ['auth', 'login', 'signup', 'otp', 'verify']):
            area = 'Authentication'
        elif any(x in name_lower for x in ['home', 'dashboard', 'main']):
            area = 'Core'
        elif any(x in name_lower for x in ['order', 'cart', 'checkout', 'payment']):
            area = 'Commerce'
        elif any(x in name_lower for x in ['profile', 'account', 'settings']):
            area = 'Account'
        elif any(x in name_lower for x in ['inventory', 'product', 'catalog']):
            area = 'Inventory'
        elif any(x in name_lower for x in ['customer', 'user', 'member']):
            area = 'Users'
        elif any(x in name_lower for x in ['report', 'analytics', 'stats']):
            area = 'Analytics'
        elif any(x in name_lower for x in ['loyalty', 'reward', 'points']):
            area = 'Loyalty'
        elif any(x in name_lower for x in ['marketing', 'campaign', 'offer']):
            area = 'Marketing'
        else:
            area = 'Other'

        functional_areas[area].append(screen)

    # Generate entry point
    lines.append("    START([App Entry]) --> ROUTER{Router}")
    lines.append("")

    node_counter = 0
    node_map = {}

    # Generate nodes for each functional area
    for area, area_screens in sorted(functional_areas.items()):
        if not area_screens:
            continue

        lines.append(f"    %% {area.upper()} AREA")

        # Create area hub if multiple screens
        if len(area_screens) > 1:
            area_node = f"AREA_{area.replace(' ', '_').upper()}"
            lines.append(f"    ROUTER --> {area_node}[{area}]")
            lines.append("")

        for screen in area_screens[:15]:  # Limit to top 15 screens per area
            node_counter += 1
            node_id = f"N{node_counter}"
            node_map[screen['name']] = node_id

            # Determine node shape based on type
            if screen['type'] == 'Modal':
                shape_start, shape_end = "{{", "}}"
            elif screen['type'] == 'Drawer':
                shape_start, shape_end = "[/", "/]"
            elif screen['type'] == 'Tab View':
                shape_start, shape_end = "[(", ")]"
            else:
                shape_start, shape_end = "[", "]"

            label = screen['name'].replace('Page', '').replace('Screen', '')
            lines.append(f"    {node_id}{shape_start}\"{label}\"{shape_end}")

            # Connect to area hub or router
            if len(area_screens) > 1:
                lines.append(f"    {area_node} --> {node_id}")
            else:
                lines.append(f"    ROUTER --> {node_id}")

            # Add navigation links
            for link in screen.get('navigates_to', [])[:2]:
                # Try to find matching screen
                link_lower = link.lower()
                for target in screens:
                    if target['name'].lower() in link_lower and target['name'] in node_map:
                        target_id = node_map[target['name']]
                        lines.append(f"    {node_id} -.-> {target_id}")
                        break

        lines.append("")

    # Add sub-screens for major categories
    for category, cat_screens in list(sub_screens.items())[:5]:  # Top 5 categories
        if len(cat_screens) >= 3:  # Only show if 3+ screens
            lines.append(f"    %% {category.upper()} SUB-SCREENS")

            cat_node = f"CAT_{category.replace('-', '_').upper()}"
            lines.append(f"    {cat_node}[\"{category.title()}\"]")

            for screen in cat_screens[:8]:  # Max 8 sub-screens
                node_counter += 1
                node_id = f"N{node_counter}"
                label = screen['name'][:20]  # Truncate long names
                lines.append(f"    {node_id}[\"{label}\"]")
                lines.append(f"    {cat_node} --> {node_id}")

            lines.append("")

    lines.append("    %% Styling")
    lines.append("    classDef coreClass fill:#4CAF50,stroke:#2E7D32,color:#fff")
    lines.append("    classDef commerceClass fill:#2196F3,stroke:#1565C0,color:#fff")
    lines.append("    classDef authClass fill:#FF9800,stroke:#E65100,color:#fff")
    lines.append("    classDef accountClass fill:#9C27B0,stroke:#6A1B9A,color:#fff")
    lines.append("```")
    lines.append("")

    return "\n".join(lines)

def generate_screen_catalog_by_feature(screens):
    """Generate a feature-based catalog of screens"""

    features = defaultdict(list)

    for screen in screens:
        name_lower = screen['name'].lower()

        # Categorize by feature
        if any(x in name_lower for x in ['pos', 'billing', 'invoice', 'payment']):
            features['Billing & Payments'].append(screen)
        elif any(x in name_lower for x in ['inventory', 'stock', 'product', 'catalog']):
            features['Inventory Management'].append(screen)
        elif any(x in name_lower for x in ['customer', 'user', 'member', 'crm']):
            features['Customer Management'].append(screen)
        elif any(x in name_lower for x in ['order', 'delivery', 'fulfillment']):
            features['Order Management'].append(screen)
        elif any(x in name_lower for x in ['report', 'analytics', 'stats', 'dashboard']):
            features['Analytics & Reporting'].append(screen)
        elif any(x in name_lower for x in ['loyalty', 'reward', 'points', 'cashback']):
            features['Loyalty & Rewards'].append(screen)
        elif any(x in name_lower for x in ['marketing', 'campaign', 'offer', 'deal']):
            features['Marketing & Offers'].append(screen)
        elif any(x in name_lower for x in ['setting', 'config', 'preference']):
            features['Settings & Configuration'].append(screen)
        elif any(x in name_lower for x in ['integration', 'connector', 'bridge', 'sync']):
            features['Integrations'].append(screen)
        else:
            features['Other'].append(screen)

    return features

def create_enhanced_documentation():
    """Create enhanced documentation with detailed flows"""

    structure = load_structure()

    doc = [
        "# RTMN Detailed Screen Navigation & UX Flows",
        "",
        f"**Total Screens:** {structure['total_screens']}",
        "**Analysis Date:** 2026-01-03",
        "",
        "This document provides detailed screen-by-screen navigation flows for the entire RTMN ecosystem.",
        "",
        "## Overview",
        ""
    ]

    # Overview table
    doc.append("| App Category | Screen Count | Main Screens | Categories |")
    doc.append("|--------------|--------------|--------------|------------|")

    for app_name, app_data in sorted(structure['apps'].items()):
        main_screens, sub_screens = identify_main_screens(app_data['screens'])
        doc.append(f"| {app_name} | {app_data['screen_count']} | {len(main_screens)} | {len(sub_screens)} |")

    doc.append("")
    doc.append("---")
    doc.append("")

    # Detailed sections for each app
    for app_name, app_data in sorted(structure['apps'].items()):
        doc.append(f"## {app_name}")
        doc.append("")
        doc.append(f"**Total Screens:** {app_data['screen_count']}")
        doc.append("")

        # Detailed Mermaid diagram
        doc.append(generate_detailed_mermaid(app_name, app_data['screens']))

        # Feature-based catalog
        doc.append(f"### Feature-Based Screen Catalog")
        doc.append("")

        features = generate_screen_catalog_by_feature(app_data['screens'])

        for feature_name, feature_screens in sorted(features.items()):
            if not feature_screens:
                continue

            doc.append(f"#### {feature_name} ({len(feature_screens)} screens)")
            doc.append("")
            doc.append("<details>")
            doc.append(f"<summary>View all {len(feature_screens)} screens</summary>")
            doc.append("")
            doc.append("| # | Screen Name | Type | Path |")
            doc.append("|---|-------------|------|------|")

            for i, screen in enumerate(sorted(feature_screens, key=lambda x: x['name']), 1):
                doc.append(f"| {i} | {screen['name']} | {screen['type']} | `{screen['path']}` |")

            doc.append("")
            doc.append("</details>")
            doc.append("")

        doc.append("---")
        doc.append("")

    return "\n".join(doc)

def main():
    print("🎨 Generating enhanced screen flow documentation...")

    doc = create_enhanced_documentation()

    output_file = Path("DETAILED_SCREEN_FLOWS_AND_UX.md")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(doc)

    print(f"✅ Enhanced documentation saved to: {output_file}")
    print("🎉 Done!")

if __name__ == "__main__":
    main()
