import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      style={{ backgroundColor: '#333333' }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{width: '100%'}}
        >
          <Tab className='tab1'
            label="MESSIAS"
            {...a11yProps(0)}
            style={{
              fontFamily: 'Sports World',
              color: '#F7DE58',
              fontSize: 14
            }}
          />
          <Tab className='tab1'
            label="BUNYAN"
            {...a11yProps(1)}
            style={{
              fontFamily: 'Sports World',
              color: '#F7DE58',
              fontSize: 14
            }}
          />
          <Tab className='tab1'
            label="LEÃO"
            {...a11yProps(2)}
            style={{
              fontFamily: 'Sports World',
              color: '#F7DE58',
              fontSize: 14
            }}
          />
          <Tab className='tab1'
            label="NAVIO"
            {...a11yProps(3)}
            style={{
              fontFamily: 'Sports World',
              color: '#F7DE58',
              fontSize: 14
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        É o carro chefe dos círculos e o mais importante, pois nele trabalhamos
        diretamente com a Palavra de Deus, a Bíblia, a nossa regra de fé e vida.
        Escolhemos um livro e o estudamos capítulo por capítulo, em todos os
        grupos, utlizando sempre a linguagem adequada para cada faixa etária.
        <br />
        <br />
        Focado na formação espiritual, trabalha a Palavra de Deus como
        fundamento de fé e prática. A abordagem de estudo por capítulos,
        adaptada a cada faixa etária, facilita a compreensão e promove a
        aplicação prática dos ensinamentos bíblicos.
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        Leitura e narração de clássicos escolhidos por meio de curadoria. Com o
        objetivo de trabalhar o imaginário, enriquecimento de vocabulário,
        cultura de leitura e interpretação de texto. Ademais, de proporcionar um
        espaço para discussão de livros entre os membros.
        <br />
        <br />
        Voltado para o enriquecimento cultural e desenvolvimento do imaginário,
        utiliza clássicos literários através de curadoria, promovendo leitura,
        narração e discussão. A interação com obras de alta qualidade estimula o
        vocabulário, a interpretação e o pensamento crítico.
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        <span style={{ fontFamily: 'Sports World', color: '#70E1E6' }}>
          FASE 1
        </span>
        <br />
        <br /> LEITURA E NARRAÇÃO, TRAVA-LÍNGUAS, MÉTODO FÔNICO, POESIA: LEITURA
        E DECLAMAÇÃO, A IMPORTÂNCIA DA BELEZA, CONCEITO DE DESENHO, MÚSICA,
        POVOS ANTIGOS - PARTE 1, LOCALIZAÇÃO GEOGRÁFICA, ASPECTOS FÍSICOS E
        CULTURAIS
        <br /><br />
        <span style={{ fontFamily: 'Sports World', color: '#70E1E6' }}>
          FASE 2
        </span>
        <br />
        <br /> HISTÓRIAS DO MUNDO: LEITURA E NARRAÇÃO DE CONTOS E MITOS
        UNIVERSAIS, TRAVA-LÍNGUAS, POESIA E RITMO NARRATIVAS BÍBLICAS E ESTILO
        LITERÁRIO, A BELEZA NA DIVERSIDADE CULTURAL, HISTÓRIA DA ARTE:
        TRANSIÇÕES CULTURAIS, A CRIAÇÃO NA ARTE, SIMBOLOGIA CRISTÃ, POVOS
        ANTIGOS - PARTE 2, LOCALIZAÇÃO GEOGRÁFICA, ASPECTOS FÍSICOS E CULTURAIS.
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={3}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        <span style={{ fontFamily: 'Sports World', color: '#70E1E6' }}>
          FASE 1
        </span>
        <br />
        <br /> NÚMEROS NATURAIS, 4 OPERAÇÕES BÁSICAS, MEDIDAS, RACIOCÍNIO
        LÓGICO, CONCEITO DE EDUCAÇÃO FINANCEIRA, PLANEJAMENTO FINANCEIRO,
        ORGANIZAÇÃO FINANCEIRA, CONCEITO DE ORGANIZAÇÃO, A LÓGICA DA
        ORGANIZAÇÃO, DICAS PRÁTICAS.
        <br /><br />
        <span style={{ fontFamily: 'Sports World', color: '#70E1E6' }}>
          FASE 2
        </span>
        <br />
        <br /> REVISÃO NÚMEROS NATURAIS, OPERAÇÕES BÁSICAS II, CONCEITO DE
        DINHEIRO, NOÇÕES MEDIDAS II, HORAS E NOÇÕES DE TEMPO, PROBLEMAS DE SOMA
        E SUBTRAÇÃO COM APLICAÇÕES REAIS, O VALOR DO DINHEIRO E O CONCEITO DE
        MORDOMIA, CONCEITO DE ECONOMIA E POUPAR, CONCEITO DE INVESTIMENTO,
        CONCEITO DE ORGANIZAÇÃO E PLANEJAMENTO, A LÓGICA DA ORGANIZAÇÃO, DICAS
        PRÁTICAS II, MONTANDO UMA ROTINA.
      </CustomTabPanel>
    </Box>
  )
}
