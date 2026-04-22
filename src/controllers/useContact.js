export const WHATSAPP_NUMBER = '5500000000000'

export function buildWhatsAppUrl(message = 'Olá, gostaria de registrar minha marca!') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
