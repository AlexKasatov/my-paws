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
                                toast.error('Something was wrong', error.message, {
                                        position: 'bottom-center',
                                });
                        } else {
                                toast.error(' Something was very wrong ', error.message);
                        }

                        setError(error);
                } finally {
                        setLoader(false);
                }
        };

        const uploadImage = async (formData) => {
                try {
                        setLoader(true);

                        await toast.promise(cb(formData), {
                                pending: '😼 Checking for a catzz...',
                                success: `🙀 Cat is detected! 👌`,
                        });
                } catch (error) {
                        const expectedError =
                                error.response && error.response.status >= 400 && error.response.status < 500;

                        if (!expectedError) {
                                toast.error(`😿 Something went wrong`, error.message);
                        } else {
                                toast.error(`🙈 Oopz, no cat's found!`, error.message);
                        }

                        setError(error);
                } finally {
                        setLoader(false);
                }
        };

        return [uploadImage, fetch, loader, error];
};

export default useFetch;
