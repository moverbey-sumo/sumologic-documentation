---
id: role-capabilities
title: Role Capabilities
description: Assign any of these capabilities when you create user roles.
---


You can assign any of the following capabilities when you [create roles](create-manage-roles.md).

## Data Management

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Manage connections
   </td>
   <td>Manage the <a href="https://help.sumologic.com/manage/Connections-and-Integrations">connections</a> that allow you to send alerts to other tools.
   </td>
  </tr>
  <tr>
   <td>Manage Collectors
   </td>
   <td>Install and manage <a href="https://help.sumologic.com/03Send-Data/Installed-Collectors">installed</a> and <a href="https://help.sumologic.com/03Send-Data/Hosted-Collectors">hosted</a> Collectors and <a href="https://help.sumologic.com/03Send-Data/Sources">Sources</a>. Manage permission automatically includes view permission.
   </td>
  </tr>
  <tr>
   <td>Manage Ingest Budgets
   </td>
   <td>Manage <a href="https://help.sumologic.com/manage/Ingestion-and-Volume/Ingest_Budgets">ingest budgets</a>. Enabling this will automatically enable the Manage Collectors capability. The Manage Collectors capability on its own permits the re-assignment of budgets to different Collectors, but not creating or deleting them.
   </td>
  </tr>
  <tr>
   <td>Manage data volume feed
   </td>
   <td><a href="https://help.sumologic.com/manage/Ingestion-and-Volume/Data_Volume_Index">Enable and manage the data volume index</a> for your account to avoid using <a href="https://help.sumologic.com/manage/Account/01-Account-Types#Account_Capacity_Limitations">On-Demand Capacity</a>, and to determine when you need to upgrade your account.
   </td>
  </tr>
  <tr>
   <td>View Collectors
   </td>
   <td>View Collectors and Sources that have already been installed or added.
   </td>
  </tr>
  <tr>
   <td>View fields
   </td>
   <td>View <a href="https://help.sumologic.com/manage/fields">fields</a>, which are custom metadata fields you can assign to logs.
   </td>
  </tr>
  <tr>
   <td>Manage fields
   </td>
   <td>Manage <a href="https://help.sumologic.com/manage/fields">fields</a>, which are custom metadata fields you can assign to logs.
<p>Note that if you grant a role the Manage Fields capability, users with that role will also have the View Fields and View field extraction rules capabilities.</p>
   </td>
  </tr>
  <tr>
   <td>View field extraction rules
   </td>
   <td>View <a href="https://help.sumologic.com/manage/Field-Extractions">field extraction rules</a>, which speed the search process by automatically parsing fields as log messages are ingested.
   </td>
  </tr>
  <tr>
   <td>Manage field extraction rules
   </td>
   <td><a href="https://help.sumologic.com/manage/Field-Extractions">Manage field extractions</a>, which speed the search process by automatically parsing fields as log messages are ingested.
<p>Note that if you grant a role the Manage field extraction rules capability, users with that role will also have the Manage Fields, View Fields, and View field extraction rules capabilities.</p>
   </td>
  </tr>
  <tr>
   <td>View Partitions
   </td>
   <td>View <a href="https://help.sumologic.com/manage/Partitions_and_Data_Tiers">Partitions</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Partitions
   </td>
   <td>View, create, edit, and delete <a href="https://help.sumologic.com/manage/Partitions_and_Data_Tiers">Partitions</a>.
<p>Note that if you grant a role the Manage Partitions capability, users with that role will also have View Partitions and Manage S3 data forwarding capabilities.</p>
   </td>
  </tr>
  <tr>
   <td>View Scheduled Views
   </td>
   <td>View <a href="https://help.sumologic.com/manage/Scheduled-Views">Scheduled Views</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Scheduled Views
   </td>
   <td>View, create, edit, and delete <a href="https://help.sumologic.com/manage/Scheduled-Views">Scheduled Views</a>. Note that if you grant a role the Manage Schedule View capability, users with that role will also have View Scheduled View capabilities.
   </td>
  </tr>
  <tr>
   <td>Manage S3 data forwarding
   </td>
   <td><a href="https://help.sumologic.com/manage/Data-Forwarding/Configure-Data-Forwarding-from-Sumo-Logic-to-S3">Manage S3 data forwarding</a> from Sumo Logic to an S3 bucket.
   </td>
  </tr>
  <tr>
   <td>Manage Content
   </td>
   <td>Manage the content for your organization. This provides access to <a href="https://help.sumologic.com/manage/Content_Sharing/Admin_Mode">Admin Mode</a> in the Library.
   </td>
  </tr>
  <tr>
   <td>Manage Tokens
   </td>
   <td>Manage <a href="https://help.sumologic.com/manage/Security/Installation_Tokens">Installation Tokens</a>.
   </td>
  </tr>
  <tr>
   <td>View Account Overview
   </td>
   <td>View the Account Overview page.
   </td>
  </tr>
  <tr>
   <td>View Parsers
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Schema/Parser_Editor">Parsers</a>.
   </td>
  </tr>
  <tr>
   <td>Download Search Results
   </td>
   <td><a href="https://help.sumologic.com/05Search/Get-Started-with-Search/Search-Basics/Export-Search-Results">Export</a> log query results to a .csv file.
   </td>
  </tr>
</table>



## Metrics

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Manage Logs-to-Metrics
   </td>
   <td>Create, edit, or delete <a href="https://help.sumologic.com/Metrics/Logs-to-Metrics">Logs-to-Metrics</a> rules.
   </td>
  </tr>
  <tr>
   <td>Manage Metrics Transformation Rules
   </td>
   <td>Create, edit, or delete <a href="https://help.sumologic.com/Metrics/Metrics_Transformation_Rules">Metrics Transformation rules</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Metric Rules
   </td>
   <td>Create, edit, or delete <a href="https://help.sumologic.com/Metrics/Metric_Rules_Editor">Metric Rules</a>.
   </td>
  </tr>
</table>



## Security

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Manage password policy
   </td>
   <td>Set the password policy for your Sumo Logic account.
   </td>
  </tr>
  <tr>
   <td>Allowlist IP addresses
   </td>
   <td><a href="https://help.sumologic.com/manage/Security/Create-an-Allowlist-for-IP-or-CIDR-Addresses">Explicitly grant access</a> to specific IP addresses or address ranges.
   </td>
  </tr>
  <tr>
   <td>Create access keys
   </td>
   <td>Allows users to create their own access keys on the <a href="https://help.sumologic.com/01Start-Here/05Customize-Your-Sumo-Logic-Experience/Preferences-Page">Preferences page</a>.
   </td>
  </tr>
  <tr>
   <td>Manage access keys
   </td>
   <td><a href="https://help.sumologic.com/manage/Security/Access-Keys">Set up, activate, deactivate, or delete access keys</a> for your organization.
   </td>
  </tr>
  <tr>
   <td>Manage support account access
   </td>
   <td>Enable <a href="https://help.sumologic.com/manage/Security/Enable-a-Support-Account">management of the Sumo Logic support account</a> for your organization.
   </td>
  </tr>
  <tr>
   <td>Manage audit data feed.
   </td>
   <td><a href="https://help.sumologic.com/manage/Security/Audit-Index">Enable and manage the Audit Index</a>, which provides information on the internal events that occur in your account associated with account management, user activity, and scheduled searches.
   </td>
  </tr>
  <tr>
   <td>Manage SAML
   </td>
   <td><a href="https://help.sumologic.com/manage/Security/SAML">Provision and manage SAML</a> for single sign-on to your Sumo Logic accounts.
   </td>
  </tr>
  <tr>
   <td>Manage Share dashboards outside of the organization
   </td>
   <td><a href="https://help.sumologic.com/Visualizations-and-Alerts/Dashboards/Share_Dashboards/Share_a_Dashboard_Inside_Your_Org">Share a dashboard</a> with users who don't have access to Sumo Logic.
   </td>
  </tr>
  <tr>
   <td>Manage organization settings
   </td>
   <td>Users with this capability can configure a <a href="https://help.sumologic.com/manage/Security/Set_a_Limit_for_User_Concurrent_Sessions">concurrent user sessions limit</a> and enable the <a href="https://help.sumologic.com/manage/Security/Data_Access_Level_for_Shared_Dashboards">Data Access Level for Shared Dashboards</a> security policy.
   </td>
  </tr>
  <tr>
   <td>Change Data Access Level
   </td>
   <td>Users with this capability can change the <a href="https://help.sumologic.com/Visualizations-and-Alerts/Dashboards/Get-Started-with-Dashboards-and-Panels/Set_the_Data_Access_Level_for_a_Dashboard">data access level</a> of dashboards or scheduled searches to which they have edit or manage permission.
   </td>
  </tr>
</table>



## Dashboards

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Share dashboards with the allowlist
   </td>
   <td><a href="https://help.sumologic.com/Visualizations-and-Alerts/Dashboards/Share_Dashboards/Share_a_Dashboard_Inside_Your_Org#Share_Dashboards_outside_your_organization">Share dashboards</a> in view-only mode with no login required. Viewers must be connecting from IP addresses specified in your <a href="https://help.sumologic.com/Visualizations-and-Alerts/Dashboards/Share_Dashboards/Share_a_Dashboard_Inside_Your_Org#Enable_the_service_whitelist">service allowlist</a>.
   </td>
  </tr>
  <tr>
   <td>Share dashboards with the world
   </td>
   <td><a href="https://help.sumologic.com/Visualizations-and-Alerts/Dashboards/Share_Dashboards/Share_a_Dashboard_Inside_Your_Org#Share_Dashboards_outside_your_organization">Share dashboards</a> in view-only mode with no login required. Anyone with the URL can view the dashboard without logging in.
   </td>
  </tr>
</table>



## User Management
<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Manage users and roles
   </td>
   <td>Access the web app pages to manage <a href="https://help.sumologic.com/manage/Users-and-Roles/Manage-Users">users</a> and <a href="https://help.sumologic.com/manage/Users-and-Roles/Manage-Roles">roles</a>.
   </td>
  </tr>
</table>



## Alerts

Folder-level permissions are available if your org has fine-grained Monitor permissions enabled. If you'd like to use this feature, contact Sumo Logic Support to have it enabled.


<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>View Monitors
   </td>
   <td>View <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors">Monitors</a>.
<p>If <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors#Grant_permissions_to_Monitors_folders">Monitor folder permissions </a>are enabled for your org, users with this capability can view folders on the <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors">Monitors</a> page to which they've been granted View access, and the Monitors contained in those folders.</p>
   </td>
  </tr>
  <tr>
   <td>Manage Monitors
   </td>
   <td>A user with this capability can create new folders and <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors">Monitors</a>, and grant other roles permissions to the folders they create.
<p>If <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors#Grant_permissions_to_Monitors_folders">Monitor folder permissions</a> are enabled for your org, users with this capability can also create, edit, delete, update and grant permissions to folders to which another user has granted them those permissions.</p>
   </td>
  </tr>
  <tr>
   <td>View Alerts
   </td>
   <td>View <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors/Alert_Response#Alert_List">Alerts</a> on the Alerts page.
   </td>
  </tr>
  <tr>
   <td>Admin Monitors
   </td>
   <td>If <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors#Grant_permissions_to_Monitors_folders">Monitor folder permissions</a> are enabled for your org, users with this capability have full access (Create, Edit, Delete, Update, and grant permissions) to ALL folders and monitors on the <a href="https://help.sumologic.com/Visualizations-and-Alerts/Alerts/Monitors">Monitors</a> page. This is similar to the Content Administrator capability of the Content Library.
   </td>
  </tr>
</table>



## Organizations

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>View Organizations
   </td>
   <td>View the <a href="https://help.sumologic.com/manage/01Manage_Subscription/08Create_and_Manage_Orgs">Organizations</a> UI.
   </td>
  </tr>
  <tr>
   <td>Create Organizations
   </td>
   <td>Create and provision child organizations.
   </td>
  </tr>
  <tr>
   <td>Change Credits Allocation
   </td>
   <td>Change the credits allocation for a child organization.
   </td>
  </tr>
  <tr>
   <td>Create Trial Organizations
   </td>
   <td>Create trial organizations. (For Sumo Logic Service Providers only.)
   </td>
  </tr>
  <tr>
   <td>Upgrade Trial Organizations
   </td>
   <td>Upgrade trial organizations. (For Sumo Logic Service Providers only.)
   </td>
  </tr>
  <tr>
   <td>Deactivate Organizations
   </td>
   <td>Deactivate trial organizations. (For Sumo Logic Service Providers only.)
   </td>
  </tr>
</table>



## Cloud SIEM Enterprise

Cloud SIEM Enterprise (CSE) capabilities only appear in the Roles UI if CSE has been enabled for your account.


<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>View Cloud SIEM Enterprise
   </td>
   <td>Users with a role that grants this capability will see a "Cloud SIEM Enterprise" link in the left-nav bar of the Sumo Logic UI. When a user clicks on the link, the CSE Heads-Up Display (HUD) will open.
   </td>
  </tr>
  <tr>
   <td>Comment on Insights
   </td>
   <td>Add comments to <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_the_CSE_Insight_UI">Insights</a>.
   </td>
  </tr>
  <tr>
   <td>Create Insights
   </td>
   <td>Create <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_the_CSE_Insight_UI">Insights</a>.
   </td>
  </tr>
  <tr>
   <td>Delete Insights
   </td>
   <td>Delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_the_CSE_Insight_UI">Insights</a>.
   </td>
  </tr>
  <tr>
   <td>Invoke Insights Actions
   </td>
   <td>Choose and run an <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_CSE_Actions">Action</a> from the Actions menu for an Insight.
   </td>
  </tr>
  <tr>
   <td>Manage Insight Assignee
   </td>
   <td>Change the user that is assigned to an <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_the_CSE_Insight_UI">Insights</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Insight Signals
   </td>
   <td>Add Signals to Insights; remove Signals from Insights.
   </td>
  </tr>
  <tr>
   <td>Manage Insight Status
   </td>
   <td>Change the status of an <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_the_CSE_Insight_UI">Insights</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Insight Tags
   </td>
   <td>Add and delete tags assigned to <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_the_CSE_Insight_UI">Insights</a>.
   </td>
  </tr>
  <tr>
   <td>View Rules
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Rules/01_About_CSE_Rules">CSE rules</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Rules
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Rules/01_About_CSE_Rules">CSE rules</a>.
   </td>
  </tr>
  <tr>
   <td>View Threat Intelligence
   </td>
   <td>View threat intel sources in CSE.
   </td>
  </tr>
  <tr>
   <td>Manage Threat Intelligence
   </td>
   <td>Create, edit, and delete threat intel sources.
   </td>
  </tr>
  <tr>
   <td>View Match Lists
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Match_Lists_and_Suppressed_Lists/Create_a_Match_List">Match Lists</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Match Lists
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Match_Lists_and_Suppressed_Lists/Create_a_Match_List">Match Lists</a>.
   </td>
  </tr>
  <tr>
   <td>View File Analysis
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Rules/Import_YARA_Rules">file analysis</a> (YARA) rules.
   </td>
  </tr>
  <tr>
   <td>Manage File Analysis
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Rules/Import_YARA_Rules">file analysis</a> (YARA) rules.
   </td>
  </tr>
  <tr>
   <td>View Custom Insights
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/Configure_a_Custom_Insight">custom Insight</a> configurations.
   </td>
  </tr>
  <tr>
   <td>Manage Custom Insights
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/Configure_a_Custom_Insight">custom Insight</a> configurations.
   </td>
  </tr>
  <tr>
   <td>View Network Blocks
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_and_Use_Network_Blocks">network blocks</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Network Blocks
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_and_Use_Network_Blocks">network blocks</a>.
   </td>
  </tr>
  <tr>
   <td>View Suppressed Entities
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_Signal_Suppression">Suppressed</a> Entities.
   </td>
  </tr>
  <tr>
   <td>Manage Suppressed Entities
   </td>
   <td><a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/About_Signal_Suppression">Suppress</a> and unsuppress Entities.
   </td>
  </tr>
  <tr>
   <td>View Mappings
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Schema/Create_a_Structured_Log_Mapping">log mappings</a> and <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Ingestion/ztConfigure_a_Sumo_Logic_Ingest_Mapping">ingest mappings.</a>
   </td>
  </tr>
  <tr>
   <td>Manage Mappings
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Schema/Create_a_Structured_Log_Mapping">log mappings</a> and <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Ingestion/ztConfigure_a_Sumo_Logic_Ingest_Mapping">ingest mappings</a>.
   </td>
  </tr>
  <tr>
   <td>View Workflow
   </td>
   <td>View Insight <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/05Set_Insight_Generation_Window_and_Threshold">detection settings</a>, custom Insight <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Manage_Custom_Insight_Statuses">statuses</a> and <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Manage_Custom_Insight_Resolutions">resolutions</a>, and <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_a_Custom_Tag_Schema">tag schemas</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Workflow
   </td>
   <td>Create, edit, and delete Insight <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/05Set_Insight_Generation_Window_and_Threshold">detection settings</a>, custom Insight <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Manage_Custom_Insight_Statuses">statuses</a> and <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Manage_Custom_Insight_Resolutions">resolutions</a>, and <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_a_Custom_Tag_Schema">tag schemas</a>.
   </td>
  </tr>
  <tr>
   <td>View Context Actions
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_CSE_Context_Actions">Context Actions</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Context Actions
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_CSE_Context_Actions">Context Actions</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Actions
   </td>
   <td>View, create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Administration/Create_CSE_Actions">Actions</a>.
   </td>
  </tr>
  <tr>
   <td>View Enrichments
   </td>
   <td>View Enrichments.
   </td>
  </tr>
  <tr>
   <td>Manage Enrichments
   </td>
   <td>Upload Insight, Signal, and Entity enrichments using the CSE API.
   </td>
  </tr>
  <tr>
   <td>View Custom Entity Types
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/11Create_a_Custom_Entity_Type">custom Entity types</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Custom Entity Types
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/11Create_a_Custom_Entity_Type">custom Entity types</a>.
   </td>
  </tr>
  <tr>
   <td>View Entity Normalization
   </td>
   <td>View the configurations on CSE’s <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Schema/Username_and_Hostname_Normalization">Domain Normalization</a> page.
   </td>
  </tr>
  <tr>
   <td>Manage Entity Normalization
   </td>
   <td>Update the configurations on CSE’s <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/CSE_Schema/Username_and_Hostname_Normalization">Domain Normalization</a> page.
   </td>
  </tr>
  <tr>
   <td>View Entity Criticality
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/07Entity_Criticality">Entity Criticalities</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Entity Criticality
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/07Entity_Criticality">Entity Criticalities</a>.
   </td>
  </tr>
  <tr>
   <td>View Tag Schemas
   </td>
   <td>View tag schemas.
   </td>
  </tr>
  <tr>
   <td>Manage Tag Schemas
   </td>
   <td>Create, edit, and delete schema key tags, which can be attached to Insights, Signals, Entities, and Rules.
   </td>
  </tr>
  <tr>
   <td>Manage Favorite Fields
   </td>
   <td>Add and remove favorite fields by clicking the star icon next to the fields in CSE Records.
   </td>
  </tr>
  <tr>
   <td>View Entity Groups
   </td>
   <td>View <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/Create_an_Entity_Group">Entity Groups</a>.
   </td>
  </tr>
  <tr>
   <td>Manage Entity Groups
   </td>
   <td>Create, edit, and delete <a href="https://help.sumologic.com/Cloud_SIEM_Enterprise/Records%2C_Signals%2C_Entities%2C_and_Insights/Create_an_Entity_Group">Entity Groups</a>.
   </td>
  </tr>
</table>
