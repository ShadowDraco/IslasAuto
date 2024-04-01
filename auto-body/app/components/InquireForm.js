'use client'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Typography,
  Box,
  Button,
} from '@mui/material'

export default function InquireForm() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')

  const submit = async () => {
    const response = await fetch(
      `/api/appointment/${fName}/${lName}/${email}/${phone}/${vehicle}/${description}`,
      { method: 'POST' }
    )
    const res = await response.json()

    setMessage(res.success)
  }

  return (
    <Box>
      <FormControl
        sx={{
          my: 3,
          p: 3,
          backgroundColor: 'rgba(70, 70, 70, 0.5)',
          margin: 'auto',
          width: '80%',
          maxWidth: 600,
          display: 'flex',
          gap: 2,
          border: '4px green inset',
        }}
      >
        {' '}
        <Typography textAlign='center' variant='h4' mb={2}>
          Send us your inquiry:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel sx={{ color: 'white' }}>First Name</FormLabel>
            <Input
              type='text'
              sx={{ color: 'white' }}
              onChange={e => {
                setFName(e.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: 'white' }}>Last Name</FormLabel>
            <Input
              type='text'
              sx={{ color: 'white' }}
              onChange={e => {
                setLName(e.target.value)
              }}
            />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel sx={{ color: 'white' }}>Email address</FormLabel>
          <Input
            type='email'
            sx={{ color: 'white' }}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ color: 'white' }}>Phone number</FormLabel>
          <Input
            type='tel'
            sx={{ color: 'white' }}
            onChange={e => {
              setPhone(e.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ color: 'white' }}>Make + model</FormLabel>
          <Input
            type='text'
            sx={{ color: 'white' }}
            onChange={e => {
              setVehicle(e.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ color: 'white' }}>What&apos;s wrong?</FormLabel>
          <Input
            type='text'
            sx={{ color: 'white' }}
            onChange={e => {
              setDescription(e.target.value)
            }}
          />{' '}
        </FormControl>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            margin: 'auto',
            width: '75%',
            maxWidth: 700,
            marginTop: 2,
          }}
        >
          <Button
            onClick={() => {
              submit()
            }}
            variant='contained'
            color='success'
          >
            Submit
          </Button>

          <Typography
            sx={{
              color: message === 'success' ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
            {message !== '' && `Status: ${message} `}
          </Typography>
        </Box>
      </FormControl>
    </Box>
  )
}
