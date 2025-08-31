import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }, [onError])

  if (hasError) {
    return (
      <div className={cn('bg-muted flex items-center justify-center', className)}>
        <span className="text-muted-foreground text-sm">Imagem não disponível</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={cn('bg-muted animate-pulse', className)} />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        className={cn(
          className,
          isLoading ? 'opacity-0' : 'opacity-100',
          'transition-opacity duration-300'
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

export default OptimizedImage