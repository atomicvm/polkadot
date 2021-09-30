initSidebarItems({"constant":[["STORAGE_VERSION","The current storage version."]],"fn":[["migrate_to_latest","Migrates the pallet storage to the most recent version, checking and setting the `StorageVersion`."],["migrate_to_v1","Migrates the `HostConfiguration` from v0 (with deprecated `hrmp_open_request_ttl` and without `ump_max_individual_weight`) to v1 (without HRMP TTL and with max individual weight). Uses the `Default` implementation of `HostConfiguration` to choose a value for `ump_max_individual_weight`."]]});