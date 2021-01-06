import http from '@/api/http';
import { Nest, rawDataToNest } from '@/api/admin/nests/getNests';

export default (name: string, description?: string): Promise<Nest> => {
    return new Promise((resolve, reject) => {
        http.post('/api/application/nests', {
            name, description,
        })
            .then(({ data }) => resolve(rawDataToNest(data)))
            .catch(reject);
    });
};
