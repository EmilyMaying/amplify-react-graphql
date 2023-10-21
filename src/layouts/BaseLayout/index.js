import {
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    Typography,
  } from '@mui/material'
  import { useLocation, useNavigate } from 'react-router-dom'
  import MoreIcon from '@mui/icons-material/MoreVert'
  import React from 'react'
  import { APP_LOGO, APP_NAME } from '../../constants'
import { Image } from '@aws-amplify/ui-react'
  

  
  const BaseLayout = () => {
    const navigate = useNavigate()
  
    const location = useLocation()
    const path = location.pathname.split('/')[1] 
  
    const [anchorElUser, setAnchorElUser] = React.useState(null)
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget)
    }
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null)
    }
  
      return (
        <>
          <AppBar component="nav">
            <Toolbar>
              <Image alt={APP_NAME} src={APP_LOGO} sx={{ marginRight: 1 }}
                height="10%"
                width="10%"
                opacity="100%" 
                />
             
              <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, width: 100 }}>
                <Tabs value={path} centered textColor="inherit">
                  <Tab
                    label="Matérias Primas"
                    onClick={() => navigate('/materias')}
                  />
                  <Tab
                    label="Formulações"
                    onClick={() => navigate('/formulas')}
                  />
                  <Tab
                    label="Produção"
                    onClick={() => navigate('/producao')}
                  />
                  <Tab
                    label="Relatórios"
                    onClick={() => navigate('/relatorios')}
                  />
                </Tabs>
              </Box>
  
            
  
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
                onClick={handleOpenUserMenu}
              >
                <MoreIcon />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate('/about')}
                  >
                    Sobre
                  </Typography>
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </>
      )
    
  }
  
  export default BaseLayout