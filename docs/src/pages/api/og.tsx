import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

const font = fetch(new URL('./Inter-SemiBold.otf', import.meta.url)).then(res =>
  res.arrayBuffer(),
);

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title');
  const inter = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          color: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          backgroundColor: '#030303',
          backgroundImage:
            'radial-gradient(circle at 40% 40%, rgba(1,102,255,0.4) 0%, transparent 40%), radial-gradient(circle at 60% 60%, rgba(183, 65, 14, 0.6) 0%, transparent 30%)',
          fontWeight: 600,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          viewBox="0 0 256 256"
        >
          <defs>
            <clipPath id="clip1">
              <path d="M2.7 146H256v110H2.7zm0 0"></path>
            </clipPath>
          </defs>
          <g>
            <g clipPath="url(#clip1)">
              <path
                fill="#06F"
                fillRule="evenodd"
                d="M141.168 245.355l94.465-94.265a13.27 13.27 0 019.762-4.273c7.343 0 13.304 5.964 13.304 13.3v82.59c0 7.344-5.96 13.305-13.304 13.305H16c-7.344 0-13.3-5.961-13.3-13.305v-82.59c0-7.336 5.956-13.3 13.3-13.3 3.844 0 7.316 1.636 9.742 4.25l94.469 94.288c1.746 1.825 6.227 5.106 10.48 5.106 4.25 0 7.801-2.508 10.477-5.106zm0 0"
              ></path>
            </g>
            <path
              fill="#06F"
              fillRule="evenodd"
              d="M241.89.012c.274-.012.551-.024.829-.024.277 0 .554.012.824.024h.004c8.187.433 14.7 7.218 14.7 15.508 0 4.695-2.087 8.902-5.38 11.75L141.301 138.832a15.53 15.53 0 01-10.617 4.176 15.62 15.62 0 01-11.711-5.281L8.078 26.773A15.492 15.492 0 013.246 15.52c0-8.57 6.957-15.532 15.527-15.532.282 0 .559.012.832.024zm0 0"
            ></path>
          </g>
        </svg>
        <h1
          style={{
            fontSize: 82,
            margin: '10px 0 40px -2px',
            lineHeight: 1.1,
            textShadow: '0 2px 30px #000',
            letterSpacing: -4,
            backgroundImage: 'linear-gradient(90deg, #fff 40%, #aaa)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Morfeo
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 30,
          }}
        >
          {title || 'The design library'}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'inter',
          data: inter,
          style: 'normal',
        },
      ],
    },
  );
}
