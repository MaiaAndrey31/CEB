import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { theme } from '../../styles/theme'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
          color: theme.colors.blue,
          fontFamily:'Sports World', 
          fontSize: '1.2rem',
          fontWeight: 400,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        Menu
        <MenuIcon
          style={{
            color: theme.colors.dark,
            fontSize: '1.8rem',
            fontWeight: 'bolder'
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#home"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
           Home
          </MenuItem>
        </AnchorLink>

        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#who"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Quem Somos
          </MenuItem>
        </AnchorLink>

        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#fusion"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
           Fusão
          </MenuItem>
        </AnchorLink>

        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#method"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Metodologia
          </MenuItem>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#pillars"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Pilares
          </MenuItem>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#circles"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Círculos
          </MenuItem>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#help"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Serviços
          </MenuItem>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#team"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Equipe
          </MenuItem>
        </AnchorLink>

        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#certification"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Certificação
          </MenuItem>
        </AnchorLink>
        <AnchorLink
          style={{ textDecoration: 'none', color: theme.colors.darktext }}
          href="#contact"
        >
          <MenuItem
            style={{ backgroundColor: theme.colors.blue }}
            onClick={handleClose}
          >
            Contato
          </MenuItem>
        </AnchorLink>

      </Menu>
    </div>
  )
}
