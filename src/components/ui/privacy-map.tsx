import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactConfig } from '@/config/contact'
import mapaAtendimento from '@/assets/area-panificadora.webp'

const PrivacyFriendlyMap = () => {
  const openInGoogleMaps = () => {
    const query = encodeURIComponent(
      `${contactConfig.address.street} ${contactConfig.address.city} ${contactConfig.address.state}`
    )
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
  }

  return (
    <div className="relative w-full h-64 group cursor-pointer" onClick={openInGoogleMaps}>
      <img
        src={mapaAtendimento}
        alt="Mapa da área de atendimento SaintDeni Alimentos - Mauá, São Paulo"
        className="w-full h-64 object-cover rounded-lg transition-all group-hover:brightness-90"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Button 
          size="lg"
          className="bg-white/95 hover:bg-white text-foreground shadow-elegant border border-border/20 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation()
            openInGoogleMaps()
          }}
        >
          <MapPin className="h-5 w-5 mr-2" />
          Ver no Google Maps
        </Button>
      </div>
      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-soft">
        <p className="text-sm font-medium text-foreground">Área de Atendimento</p>
        <p className="text-xs text-muted-foreground">
          {contactConfig.address.city}, {contactConfig.address.state}
        </p>
      </div>
    </div>
  )
}

export default PrivacyFriendlyMap