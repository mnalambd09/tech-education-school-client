import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1>1. What are the key responsibilities of Web Developers?</h1>
            <p>Build products using HTML, CSS, JavaScript, PHP (Hypertext Preprocessor), and other relevant coding languages.
                Design, develop, test, debug, and deploy applications in a cross-platform, cross-browser environment.
                Coordination with designers and programmers for the development of projects.
                Develop design specifications/patterns for optimizing web programs.
                Identifying and fixing bugs, troubleshooting, and resolving website issues.
                Taking care of the technical aspects of the site, such as its cache and performance (which indicate how fast a site will run and how much traffic it can handle).
                Providing support and assistance with web management best practices.
                Keep up with the latest technology.
                Maintain and update websites to meet modern web standards.
                Monitor web traffic.</p>
            <h1>2. List the advantages of HTTP/2 over HTTP 1.1.</h1>
            <p>Increased performance: It was designed specifically to speed up page loading and reduce round-trip time (RTT) for resource-intensive websites.
                Handle multiple resources: With HTTP 1.1, the web pages were manageable simply by using HTML markups and images. But with HTTP 2.0, there are now multiple resources available for web pages, including images, fonts, scripts, and more. HTTP 1.1 was not designed to handle such a large amount of resources today.
                Multiplexing: Multiplexing is fully implemented in HTTP/2. It means that multiple requests are sent between browsers and servers simultaneously over a single TCP connection. Consequently, several elements of a web page can be delivered via a single TCP connection. As a result, the HTTP/1.1 head-of-line blocking problem is resolved, in which a packet at the front of the line blocks the transmission of other packets.
                Header Compression: HTTP 2.0 has the ability to compress HTTP headers to reduce overhead. When HTML headers on web pages are compressed, they can be sent between the browser and server in one trip, over a single TCP connection.
                Server push: HTTP/2 servers are able to push resources into a browser's cache even before they are requested. By doing this, browsers can display content without requiring additional requests.
                Binary protocols: HTTP/2 use binary protocols, not textual. HTML/2's binary protocols consume less bandwidth, can be parsed more efficiently, and are less error-prone compared to HTTP/1.1's textual protocols</p>
            <h1>3. Explain CORS (Cross-Origin Resource Sharing) and Write its Importance.</h1>
            <p>CORS stands for Cross-origin resource sharing. It is basically defined as a browser mechanism that enables web pages from one domain to have controlled access to resources that are located at different domains (cross-domain request). In other words, it allows scripts running on a browser client to interact with and access resources from other origins. It provides and extends flexibility to the SOP (Same-Origin Policy). A same-origin policy restricts a website's ability to access resources outside its source domain. For example, if a JavaScript app wanted to call an API (Application Programming Interface) running on another domain, it would be blocked and prevented from doing so because of the SOP. Due to restrictions caused by the same-origin policy, CORS was introduced.</p>
            <h1>4. What do you mean by ETag (Entity Tag) and how does it work?</h1>
            <p>The ETag (entity tag) is a part of the HTTP protocol. This is one of several mechanisms that HTTP provides to validate Web caches, which allows conditional requests to be made from a browser to resources. Moreover, Etags make sure that simultaneous updates of the same resource don't overwrite each other (mid-air collisions).

                ETags are opaque identifiers assigned by a server to a specific version of a resource found at a specific URL. Every time the resource representation at that URL changes, an entirely new ETag is assigned. As such, ETags can be compared in the same way as fingerprints and determine if two representations of a resource are identical.</p>
        </div>
    );
};

export default FAQ;