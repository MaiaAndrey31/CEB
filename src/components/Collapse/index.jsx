import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import PropTypes from 'prop-types'




export default function AccordionExpandIcon({ header, text, icon }) {
  return (
    <div>
      <Accordion style={{backgroundColor: '#FFC107'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            style={{ fontFamily: 'Sports World', fontWeight: 400, display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <img style={{ maxHeight: 40 }} src={icon} />
            {header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

AccordionExpandIcon.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
