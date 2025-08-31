import { useState } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { contactConfig } from '@/config/contact'

const StaticMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false)
  
  const handleLoadMap = () => {
    setMapLoaded(true)
  }

  const openInGoogleMaps = () => {
    const query = encodeURIComponent(
      `${contactConfig.address.street} ${contactConfig.address.city} ${contactConfig.address.state}`
    )
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
  }

  if (!mapLoaded) {
    return (
      <div className="w-full h-64 bg-muted rounded-lg flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-border">
        <MapPin className="h-12 w-12 text-muted-foreground" />
        <div className="text-center">
          <p className="text-sm font-medium text-foreground mb-2">Área de Atendimento</p>
          <p className="text-xs text-muted-foreground mb-4">
            {contactConfig.address.street}<br />
            {contactConfig.address.city}, {contactConfig.address.state}
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              size="sm" 
              onClick={handleLoadMap}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Carregar Mapa
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={openInGoogleMaps}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Ver no Google Maps
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-64">
      <iframe
        title="Mapa de atendimento SaintDeni Alimentos - São Paulo"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        className="w-full h-64 border-0 rounded-lg"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-46.7,-23.6,-46.5,-23.4&layer=mapnik"
      />
      <div className="absolute top-2 right-2">
        <Button 
          size="sm" 
          variant="secondary"
          onClick={openInGoogleMaps}
          className="bg-white/90 hover:bg-white text-foreground shadow-soft"
        >
          <MapPin className="h-4 w-4 mr-1" />
          Abrir no Maps
        </Button>
      </div>
    </div>
  )
}

export default StaticMap