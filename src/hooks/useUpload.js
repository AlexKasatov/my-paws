import { useState } from 'react';
import { toast } from 'react-toastify';

const useUpload = (cb) => {
        const [loader, setLoader] = useState(false);
        const [error, setError] = useState('');

        const fetch = async (formData) => {
                try {
                        setLoader(true);

                        await toast.promise(
                                cb(formData),
                                {
                                        pending: '😼 Checking for a catzz...',
                                        success: `🙀 Cat is detected! 👌`,
                                },
                                {
                                        position: 'bottom-left',
                                }
                        );
                } catch (error) {
                        const expectedError =
                                error.response && error.response.status >= 400 && error.response.status < 500;

                        if (!expectedError) {
                                toast.error(`😿 Something went wrong`, error.message, {
                                        position: 'bottom-left',
                                });
                        } else {
                                toast.error(`🙈 Oopz, no cat's found!`, error.message, {
                                        position: 'bottom-left',
                                });
                        }

                        setError(error);
                } finally {
                        setLoader(false);
                }
        };

        return [fetch, loader, error];
};

export default useUpload;
