import { useEffect } from 'react';

export const Comments = () => {
    useEffect(() => {
        Octomments({
            github: {
                owner: 'muco-rolle',
                repo: 'mucotresor.com'
            },
            issueNumber: 1,
            renderer: [OctommentsRenderer, '#comments']
        }).init();
    }, []);
    return <div id="comments"></div>;
};
