import { MAILTO, socialMedias } from "../social.ts";
import { define } from "../utils.ts";

export default define.page(function () {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        <img
          src="/pp.jpg"
          alt="İbrahim Ödev"
          className="w-28 h-28 rounded-full mx-auto mb-6 border-2 border-neutral-800"
        />

        <h2 className="text-2xl font-semibold mb-1 text-white">
          İbrahim Ödev
        </h2>

        <p className="text-neutral-500 mb-8">
          @ibodev
        </p>

        <div className="flex flex-col gap-3 mb-4">
          {socialMedias.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-5 py-3.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 no-underline transition-all duration-200 hover:bg-neutral-800 hover:border-neutral-700 hover:-translate-y-0.5"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm sm:text-base">{item.title}</span>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={MAILTO}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-950 rounded-lg font-medium text-sm sm:text-base no-underline transition-all duration-200 hover:bg-neutral-100 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
});
