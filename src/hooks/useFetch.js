import { useState } from 'react';
import { toast } from 'react-toastify';

const useFetch = (cb) => {
        const [loader, setLoader] = useState(false);
        const [error, setError] = useState('');

        const fetch = async (id, type, order, limit, breedId) => {
                try {
                        setLoader(true);
                        await cb(id, type, order, limit, breedId); // wait axios req from ApiConfig
                } catch (error) {
                        const expectedError =
                                error.response && error.response.status >= 400 && error.response.status < 500;

                        if (!expectedError) {
                                toast.info('Something was wrong', error.message, {
                                        position: 'bottom-center',
                                });
                        } else {
                                toast('expected error', error.message);
                        }

                        setError(error);
                } finally {
                        setLoader(false);
                }
        };

        return [fetch, loader, error];
};

export default useFetch;
