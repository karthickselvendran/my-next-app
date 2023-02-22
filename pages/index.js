import styles from "@/styles/Home.module.css";
import Image from "next/image";
import pic from "../public/assets/nextjs.png";

export default function Home() {
  return (
    <div className="home">
      <Image className="img" src={pic} alt="Next js" width={"300"} />
      <h1 className={styles.container}>Next js</h1>
      <p>
        Next.js is an open-source web development framework created by Vercel
        enabling React-based web applications with server-side rendering and
        generating static websites. Next.js 13.1 includes improvements to both
        the pages/ (stable) and app/ (beta) directories: app Directory (Beta)
        Improvements: Improved reliability and performance. Built-in Module
        Transpilation: Bringing next-transpile-modules capabilities into core.
        Edge Runtime (Stable): A light Node.js runtime for the Edge. Turbopack
        Updates: Support for Tailwind CSS, next/image, @next/font, and more.
        Middleware Improvements: Return responses and set request headers. SWC
        Import Resolution: For smaller JavaScript bundles when using barrel
        files. Memory usage improvements, new templates, and more!
      </p>
      <br />
      <p>
        In Next.js 13, we announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more. Thanks to your feedback
        and early testing, we've made several improvements to the reliability of
        the app directory: No Layout Divs: Previously, the app directory added
        additional elements to scroll layouts into view when navigating. With
        13.1, these extra elements are no longer created. The scrolling behavior
        is preserved. TypeScript Plugin: We've built a new TypeScript plugin
        that provides suggestions for page and layout configuration options,
        brings documentation directly into your IDE, and provides helpful usage
        hints around Server and Client Components (such as preventing the use of
        useState in Server Components). Learn more. Reliability Improvements:
        We've patched numerous bugs, including improved CSS modules support,
        correctly de-duplicating cache() and fetch() for layouts and pages,
        memory leaks, and more. Less Client-Side JavaScript: The app directory
        now includes 9.3kB less client-side JavaScript than the pages directory.
        This baseline doesn't increase whether you add 1 or 1000 Server
        Components to your application. The React runtime is temporarily
        slightly larger, the increase is caused by the React Server Components
        runtime, which handles mechanics that Next.js previously handled. We are
        working to reduce this further.
      </p>
      <br />
      <p>
        In Next.js 13, we announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more. Thanks to your feedback
        and early testing, we've made several improvements to the reliability of
        the app directory: No Layout Divs: Previously, the app directory added
        additional elements to scroll layouts into view when navigating. With
        13.1, these extra elements are no longer created. The scrolling behavior
        is preserved. TypeScript Plugin: We've built a new TypeScript plugin
        that provides suggestions for page and layout configuration options,
        brings documentation directly into your IDE, and provides helpful usage
        hints around Server and Client Components (such as preventing the use of
        useState in Server Components). Learn more. Reliability Improvements:
        We've patched numerous bugs, including improved CSS modules support,
        correctly de-duplicating cache() and fetch() for layouts and pages,
        memory leaks, and more. Less Client-Side JavaScript: The app directory
        now includes 9.3kB less client-side JavaScript than the pages directory.
        This baseline doesn't increase whether you add 1 or 1000 Server
        Components to your application. The React runtime is temporarily
        slightly larger, the increase is caused by the React Server Components
        runtime, which handles mechanics that Next.js previously handled. We are
        working to reduce this further.
      </p>
      <br />
      <p>
        In Next.js 13, we announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more. Thanks to your feedback
        and early testing, we've made several improvements to the reliability of
        the app directory: No Layout Divs: Previously, the app directory added
        additional elements to scroll layouts into view when navigating. With
        13.1, these extra elements are no longer created. The scrolling behavior
        is preserved. TypeScript Plugin: We've built a new TypeScript plugin
        that provides suggestions for page and layout configuration options,
        brings documentation directly into your IDE, and provides helpful usage
        hints around Server and Client Components (such as preventing the use of
        useState in Server Components). Learn more. Reliability Improvements:
        We've patched numerous bugs, including improved CSS modules support,
        correctly de-duplicating cache() and fetch() for layouts and pages,
        memory leaks, and more. Less Client-Side JavaScript: The app directory
        now includes 9.3kB less client-side JavaScript than the pages directory.
        This baseline doesn't increase whether you add 1 or 1000 Server
        Components to your application. The React runtime is temporarily
        slightly larger, the increase is caused by the React Server Components
        runtime, which handles mechanics that Next.js previously handled. We are
        working to reduce this further.
      </p>
      <br />
      <p>
        In Next.js 13, we announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more. Thanks to your feedback
        and early testing, we've made several improvements to the reliability of
        the app directory: No Layout Divs: Previously, the app directory added
        additional elements to scroll layouts into view when navigating. With
        13.1, these extra elements are no longer created. The scrolling behavior
        is preserved. TypeScript Plugin: We've built a new TypeScript plugin
        that provides suggestions for page and layout configuration options,
        brings documentation directly into your IDE, and provides helpful usage
        hints around Server and Client Components (such as preventing the use of
        useState in Server Components). Learn more. Reliability Improvements:
        We've patched numerous bugs, including improved CSS modules support,
        correctly de-duplicating cache() and fetch() for layouts and pages,
        memory leaks, and more. Less Client-Side JavaScript: The app directory
        now includes 9.3kB less client-side JavaScript than the pages directory.
        This baseline doesn't increase whether you add 1 or 1000 Server
        Components to your application. The React runtime is temporarily
        slightly larger, the increase is caused by the React Server Components
        runtime, which handles mechanics that Next.js previously handled. We are
        working to reduce this further.
      </p>
    </div>
  );
}
