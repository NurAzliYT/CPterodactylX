import http from '@/api/http';
import { Mount, rawDataToMount } from '@/api/admin/mounts/getMounts';

export default (name: string, description: string, source: string, target: string, readOnly: boolean, userMountable: boolean): Promise<Mount> => {
    return new Promise((resolve, reject) => {
        http.post('/api/application/mounts', {
            name, description, source, target, read_only: readOnly, user_mountable: userMountable,
        })
            .then(({ data }) => resolve(rawDataToMount(data)))
            .catch(reject);
    });
};
