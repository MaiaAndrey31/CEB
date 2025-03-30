import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#333333',
        display: 'flex',
        height: 420,
        minWidth: '90vw',
        alignItems: 'center'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab
          label="CÍRCULO MESSIAS"
          {...a11yProps(0)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 17
          }}
        />
        <Tab
          label="CÍRCULO BUNYAN"
          {...a11yProps(1)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 17
          }}
        />
        <Tab
          label="CÍRCULO JONATHAN"
          {...a11yProps(2)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 17
          }}
        />
        <Tab
          label="CÍRCULO SARAH"
          {...a11yProps(3)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 17
          }}
        />
        <Tab
          label="CÍRCULO HABLEMOS"
          {...a11yProps(4)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 17
          }}
        />
        <Tab
          label="CÍRCULO BERÉIA"
          {...a11yProps(5)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 17
          }}
        />
        <Tab
          label="CÍRCULO SAPIENCIAL"
          {...a11yProps(6)}
          style={{
            fontFamily: 'Sports-World',
            color: '#F7DE58',
            fontSize: 15
          }}
        />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
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
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
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
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        Fortalecer uma identidade bíblica nos meninos é um processo intencional
        que envolve ensino, exemplo, e criação de oportunidades para que eles
        internalizem valores, princípios e a visão de mundo fundamentados na
        Bíblia.
        <br />
        <br /> Aqui estão alguns passos práticos para ajudar nesse objetivo:
        <br /> <br />
        ‘’Da mesma forma, incentive os homens mais jovens a viver com sabedoria.
        Você mesmo deve ser exemplo da prática de boas obras. Tudo que fizer
        deve refletir a integridade e a seriedade de seu ensino. Sua mensagem
        deve ser tão correta a ponto de ninguém a criticar. Então os que se
        opõem a nós ficarão envergonhados e nada terão de ruim para dizer ao
        nosso respeito.’’ <br /> <br /> Tito 2:6-8 Ensinar as escrituras
        Estimular o estudo Bíblico Estimular a oração e a adoração Modelar o
        caráter cristão Cultivar uma visão de propósito Incentivar práticas
        saudáveis Desenvolver uma masculinidade bíblica Criando um ambiente
        consistente de ensino, amor e exemplos práticos, os meninos poderão
        construir uma identidade enraizada em quem Deus os criou para ser.
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        Fortalecer uma identidade bíblica nas meninas envolve cultivar valores,
        ensinamentos e práticas que estão fundamentados na Palavra de Deus,
        enquanto as ajudamos a entender quem elas são aos olhos do Criador.
        <br />
        <br /> Aqui estão alguns passos práticos para ajudar nesse objetivo:
        <br /> <br />
        ‘’Semelhantemente, ensine as mulheres mais velhas a serem reverentes na
        sua maneira de viver, a não serem caluniadoras nem escravizadas a muito
        vinho, mas a serem capazes de ensinar o que é bom. Devem instruir as
        mulheres mais jovens a amar o marido e os filhos, a viver com sabedoria
        e pureza, a trabalhar no lar, a fazer o bem e a ser submissas ao marido.
        Assim, não envergonharão a palavra de Deus.’’ <br />
        <br /> Ensinar a identntidade de Cristo Modelar uma vida cristã
        Estimular o estudo Bíblico Promover valores Bíblicos Estimular a oração
        e a adoração Valorizar o papel feminino no Reino de Deus Fomentar a
        importância da beleza interior O nosso objetivo é ajudar as meninas a
        construir uma base sólida de fé e identidade, para que possam
      </TabPanel>
      <TabPanel
        value={value}
        index={4}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        O protestantismo na Península Ibérica (Espanha e Portugal) teve uma
        história rica, mas repleta de desafios devido à forte influência da
        Igreja Católica e da Inquisição. <br /> No entanto, a repressão pela
        Inquisição forçou muitos a fugir, levando ideias protestantes para
        outros países.
        <br /> <br />
        Ao combinar esses elementos, você não apenas aprende o idioma, mas
        também adquire um entendimento mais profundo de um capítulo fascinante
        da história ibérica. Essa abordagem multidimensional enriquece seu
        aprendizado e o torna mais significativo. <br /> <br />{' '}
        <span style={{ fontFamily: 'Sports-World', color: '#70E1E6' }}>
          Vantagens:
        </span>
        <br /> <br /> Estimula o interesse natural por histórias e personagens.
        Enriquece o vocabulário com palavras ligadas à história e cultura.
        Incentiva a empatia cultural e a visão crítica.
        <br /> Estudar espanhol para a glória de Deus é uma perspectiva
        profundamente significativa e motivadora. Essa abordagem pode conectar o
        aprendizado do idioma à missão cristã, ao crescimento pessoal e à
        capacidade de servir aos outros de maneira mais ampla. Estudar espanhol
        para a glória de Deus transforma o aprendizado em um ato de adoração,
        serviço e propósito eterno.
      </TabPanel>
      <TabPanel
        value={value}
        index={5}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        <span style={{ fontFamily: 'Sports-World', color: '#70E1E6' }}>
          GRUPO CHAVALES
        </span>
        <br />
        <br />
        <span style={{ fontFamily: 'Sports-World', color: '#F7DE58' }}>
          FASE 1
        </span>
        <br />
        GRAMÁTICA, VOCABULÁRIO, COMPREENSÃO DA LEITURA, LÓGICA, RETÓRICA,
        DIALÉTICA, GEOGRAFIA BRASILEIRA, EXPOSIÇÕES, DEBATES.
        <br /> <br />
        <span style={{ fontFamily: 'Sports-World', color: '#F7DE58' }}>
          FASE 2
        </span>
        <br />
        GRAMÁTICA, VOCABULÁRIO, COMPREENSÃO DA LEITURA, PRODUÇÃO DE TEXTO,
        LÓGICA, RETÓRICA, DIALÉTICA, HISTÓRIA DAS TECNOLOGIAS, BIOGRAFIAS,
        EXPOSIÇÕES, DEBATES.
        <br />
        <br />
        <span style={{ fontFamily: 'Sports-World', color: '#70E1E6' }}>
          GRUPO PEÑA{' '}
        </span>
        <br />
        <br />
        HISTÓRIA DA IGREJA, CULTURA, GEOPOLÍTICA, CIÊNCIA NA CRIAÇÃO, REDAÇÃO,
        GRAMÁTICA, VOCABULÁRIO, EXPOSIÇÃO, DEBATE, LÓGICA, RETÓRICA, DIALÉTICA.
      </TabPanel>
      <TabPanel
        value={value}
        index={6}
        style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: '#F7F7F7',
          maxWidth: '90%'
        }}
      >
        <span style={{ fontFamily: 'Sports-World', color: '#70E1E6' }}>
          GRUPO CHAVALES
        </span>
        <br />
        <br />
        <span style={{ fontFamily: 'Sports-World', color: '#F7DE58' }}>
          FASE 1
        </span>{' '}
        <br />
        CÁLCULO BÁSICO, PORCENTAGEM, PROBLEMAS, EDUCAÇÃO FINANCEIRA, PROJETOS,
        <br /> <br />
        <span style={{ fontFamily: 'Sports-World', color: '#F7DE58' }}>
          Ciência sob a visão Criacionista
        </span>
        <br />
        VEGETAIS, SERES VIVOS, CORPO HUMANO.
        <br /> <br />
        <span style={{ fontFamily: 'Sports-World', color: '#F7DE58' }}>
          FASE 1
        </span>
        <br />
        CÁLCULO BÁSICO, PORCENTAGEM, PROBLEMAS, EDUCAÇÃO FINANCEIRA, LOGISTICA,
        PROJETO,
        <br /> <br />
        <span style={{ fontFamily: 'Sports-World', color: '#F7DE58' }}>
          Ciência sob a visão Criacionista
        </span>
        <br />
        MEIO AMBIENTE, DINOSSAUROS, ASTRONOMIA.
        <br />
        <br />
        <span style={{ fontFamily: 'Sports-World', color: '#70E1E6' }}>
          GRUPO PEÑA
        </span>
        <br />
        <br />
        CÁLCULO, PORCENTAGEM, PROBLEMAS, EDUCAÇÃO FINANCEIRA, LOGISTICA,
        EMPREENDEDORISMO, LIDERANÇA, BIOLOGIA, ASTRONOMIA, MEIO AMBIENTE,
        PROJETO.
      </TabPanel>
    </Box>
  )
}
