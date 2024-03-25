import React from 'react'
import Link from 'next/link'
import { FaTiktok, FaPhone } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { Box, IconButton } from '@mui/material'
import { MdOutlineEmail } from 'react-icons/md'

export default function HeaderFooterIcons() {
  return (
    <Box sx={{ display: 'flex', gap: 1, backgroundColor: '' }}>
      <Link href='https://www.instagram.com/islasautobody/' target='_blank'>
        <IconButton variant='outline' color='success' size='large'>
          <BsInstagram />
        </IconButton>
      </Link>

      <Link
        style={{ display: 'none' }}
        href='https://www.tiktok.com/@islas.auto.body'
        target='_blank'
      >
        <IconButton variant='outline' color='success' size='large'>
          <FaTiktok />
        </IconButton>
      </Link>
      <Link href='tel:9092622246' target='_blank'>
        <IconButton variant='outline' color='success' size='large'>
          <FaPhone />
        </IconButton>
      </Link>
      <Link href='mailto: CCMotorsports85@gmail.com' target='_blank'>
        <IconButton variant='outline' color='success' size='large'>
          <MdOutlineEmail />
        </IconButton>
      </Link>
    </Box>
  )
}
