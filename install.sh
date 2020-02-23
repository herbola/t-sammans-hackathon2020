parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
backend=backend-server;
frontend=frontend-webb;


(cd $parent_path; npm install)

(cd ${parent_path}/${frontend}; npm install);

(cd ${parent_path}/${backend}; npm install);

echo klar