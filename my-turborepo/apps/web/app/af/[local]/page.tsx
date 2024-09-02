import getLocal from "@repo/local/getLocal";
import { LocalType } from "@repo/local/base";

export const generateStaticParams = () => [
  {
      local: 'cn',
  }, {
      local: 'en',
  }
]

export const dynamicParams = false;

export default ({params}: {params: {local: LocalType}}) => {
  return (
    <div>
      <form action="/api/login" method="post">
        <label htmlFor="password">{getLocal(params.local).password}</label>
        <input
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>

      <p>
        环境变量文件 ENV_NAME 的值: {process.env.NAME}
      </p>
      <p>
        环境变量文件 ENV_NAME 的值: {process.env.NEXT_PUBLIC_ENV_NAME}
      </p>
    </div>
  );
};
