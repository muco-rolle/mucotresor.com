import React, { useEffect, useRef } from 'react';

export const Utterances = () => {
    const commentElement = useRef();

    useEffect(() => {
        const utteranceScript = document.createElement('script');

        // utteranceScript.onload = () => this.setState({ status: 'success' });
        // utteranceScript.onerror = () => this.setState({ status: 'failed' });

        utteranceScript.setAttribute('src', 'https://utteranc.es/client.js');
        utteranceScript.setAttribute('repo', 'muco-rolle/mucotresor.com');
        utteranceScript.setAttribute('issue-term', 'pathname');
        utteranceScript.setAttribute('branch', 'develop');
        utteranceScript.setAttribute('theme', 'github-light');
        utteranceScript.setAttribute('crossorigin', 'anonymous');

        commentElement.current.appendChild(utteranceScript);
    }, []);

    return <div ref={commentElement} />;
};
