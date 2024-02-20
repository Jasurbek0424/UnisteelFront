import React from "react";

const Robots: React.FC = () => (
    <pre className="bg-black w-full h-screen text-white p-4 text-lg">
        {`User-agent: *
Disallow: /admin/
Disallow: /api.toounisteel.kz/admin/
Allow: /*.js$
Allow: /*.css$
Host: toounisteel.kz`}
    </pre>
);

export default Robots;