import { useState } from 'react'

export function useFaq() {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return { openId, toggle }
}
