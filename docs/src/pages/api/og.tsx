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
        <img
          width="256"
          height="256"
          src="http://localhost:3000/logo-small.svg"
          alt={title || ''}
        />
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
