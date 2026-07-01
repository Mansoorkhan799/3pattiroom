import { ImageResponse } from 'next/og'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(180deg, #6b1220 0%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffc107',
          fontWeight: 'bold',
          borderRadius: '20%',
          border: '4px solid #ffc107',
        }}
      >
        3P
      </div>
    ),
    {
      ...size,
    }
  )
}
