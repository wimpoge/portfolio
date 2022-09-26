import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Works = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/wimpoge/repos`
      )
      const data = await res.json()
      setItems(data)
    }

    fetchRepos()
  }, [])

  return (
    <div>
      <div >
        {items.map((data, i) => {
          return (
            <div key={i} style={{ justifyContent: 'space-around' }}>
              <Box sx={{ minHeight: '30px', padding: '20px' }}>
                <Card variant="outlined">
                  <React.Fragment>
                    <Box
                      component="span"
                      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
                    >
                      Github
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          <span>{data.name}</span>
                        </Typography>
                        <Typography variant="h5" component="div">
                          Repository
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <a href={data.html_url}> {data.html_url}</a>
                        </Typography>
                        <Typography variant="body2">
                          <span>{data.language}</span>
                          <br />

                        </Typography>
                      </CardContent>
                      <CardActions>
                        <p>Demo: <a href={data.homepage}>{data.homepage}</a></p>
                      </CardActions>
                    </Box>
                  </React.Fragment>
                </Card>
              </Box>

            </div>
          )
        })}
      </div>

    </div>
  )
}



export default Works