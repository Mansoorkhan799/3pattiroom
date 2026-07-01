import { DOWNLOAD_URL } from '@/lib/site';

interface DownloadButtonProps {
  className?: string;
  size?: 'small' | 'default' | 'large';
  label?: string;
  showIcon?: boolean;
}

export default function DownloadButton({
  className = '',
  size = 'default',
  label = 'Download 3 Patti Room',
  showIcon = true,
}: DownloadButtonProps) {
  const sizeClass =
    size === 'large' ? 'download-btn-lg' : size === 'small' ? 'download-btn-sm' : 'download-btn-md';

  return (
    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`download-btn ${sizeClass} group ${className}`}
    >
      <span>{label}</span>
      {showIcon && (
        <div className="download-icon" aria-hidden="true">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      )}
    </a>
  );
}
