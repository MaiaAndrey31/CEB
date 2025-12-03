import {
    Container,
    Content,
    HeroSection,
    Section,
    Grid,
    Card,
    PriceCard,
    List,
    CtaButton,
    Note
} from "./styles";
import Banner from "../../assets/CertBanner.webp";
import { WhatsApp } from "@mui/icons-material";
import { theme } from "../../styles/theme";

export default function Certification() {
    return (
        <Container id="certification">
            <img src={Banner} alt="Estudante com certificado" style={{ width: '100%', height: 'auto' }} />
            <Content>
                <HeroSection>
                    <h1>Certificação Americana Oficial</h1>
                    <p>
                        Validação internacional dos estudos em parceria entre o Clube Educacional Bereia (CEB) e a Hannah International School,
                        centro homologado nos Estados Unidos desde 2025.
                    </p>
                </HeroSection>

                <Section>
                    <h2>O que é essa certificação?</h2>
                    <p>
                        A certificação americana permite que o estudante tenha seus estudos reconhecidos oficialmente nos Estados Unidos,
                        através da Hannah International School, com acompanhamento pedagógico e emissão de certificados válidos pelo
                        Departamento de Educação da Flórida.
                    </p>

                    <Grid>
                        <Card delay="0.3s">
                            <h3>Validação Internacional</h3>
                            <p>Reconhecimento dos estudos do aluno em âmbito internacional.</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Centro Homologado</h3>
                            <p>Hannah International School nos EUA desde 2025, com supervisão do desenvolvimento do estudante.</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Certificados Oficiais</h3>
                            <p>Documentação emitida pela instituição americana reconhecida.</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Sem Provas Obrigatórias</h3>
                            <p>As notas do aluno são registradas pela equipe do Hannah IS para certificação.</p>
                        </Card>
                    </Grid>
                </Section>

                <Section delay="0.3s">
                    <h2>O que o aluno recebe?</h2>
                    <Grid>
                        <Card delay="0.3s">
                            <h3>Registro Oficial</h3>
                            <p>Registro na Hannah International School</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Aplicativo de Evidências</h3>
                            <p>Uso e suporte no Aplicativo de Evidências Digitais</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Documentação</h3>
                            <p>Carteirinha de estudante internacional e justificativa de matrícula</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Acompanhamento</h3>
                            <p>Boletim anual digital (e opção de boletins trimestrais/digitais ou físicos)</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Armazenamento</h3>
                            <p>Acesso à pasta pessoal no Drive para organização dos documentos</p>
                        </Card>
                        <Card delay="0.3s">
                            <h3>Comunidade</h3>
                            <p>Acesso à comunidade educativa na plataforma da escola</p>
                        </Card>
                    </Grid>
                </Section>

                <Section delay="0.4s">
                    <h2>Investimento</h2>
                    <Grid>
                        <PriceCard delay="0.5s">
                            <h3>Elementary & Middle School</h3>
                            <div className="price">400 USD</div>
                            <div className="period">por ano letivo</div>
                            <p>Ensino Fundamental I e II</p>
                        </PriceCard>
                        <PriceCard delay="0.5s">
                            <h3>High School</h3>
                            <div className="price">450 USD</div>
                            <div className="period">por ano letivo</div>
                            <p>Ensino Médio</p>
                        </PriceCard>
                    </Grid>

                    <div style={{ marginTop: '2rem' }}>
                        <h3>Formas de Pagamento</h3>
                        <List delay="0.5s">
                            <li>Taxa de ingresso única: 150 USD (somente na primeira matrícula)</li>
                            <li>Opção de pagamento único ou em 10 parcelas mensais</li>
                            <li>Parcelas de 40 USD (Fundamental) ou 45 USD (Médio)</li>
                        </List>
                        <Note>Valores podem ser atualizados pela instituição certificadora.</Note>
                    </div>
                </Section>

                <Section delay="0.5s">
                    <h2>Mediação Educacional CEB</h2>
                    <p>
                        O Clube Educacional Bereia oferece um serviço opcional de mediação completa com a Hannah International School,
                        facilitando toda a parte burocrática e o acompanhamento da certificação internacional.
                    </p>

                    <h3>Serviços Incluídos:</h3>
                    <Grid>
                        <Card delay="0.3s">
                            <h4>Orientação Completa</h4>
                            <p>Todo o suporte sobre o processo de certificação e requisitos</p>
                        </Card>
                        <Card delay="0.3s">
                            <h4>Documentação</h4>
                            <p>Organização e envio da documentação necessária</p>
                        </Card>
                        <Card delay="0.3s">
                            <h4>Intermediação</h4>
                            <p>Facilitação da comunicação com a Hannah International School</p>
                        </Card>
                        <Card delay="0.3s">
                            <h4>Acompanhamento</h4>
                            <p>Controle de prazos e etapas do processo</p>
                        </Card>
                    </Grid>

                    <div style={{  marginTop: '2rem' }}>
                        <h3>Investimento da mediação:</h3>
                        <div style={{ fontSize: '1.8rem', color: '#2ecc71', fontWeight: 'bold', margin: '1rem 0' }}>
                            R$ 600,00 por ano
                        </div>
                        <p>ou em até 10x de R$ 70,00</p>
                    </div>
                </Section>

                <div style={{ textAlign: 'center', margin: '3rem 0', justifyContent: 'center' }}>
                    <CtaButton href="https://wa.me/+34634386339"   >
                       <WhatsApp 
                       style={{
                                       fontSize: 70,
                                       color: `${theme.colors.light}`,
                                       fontWeight: 'bold'
                                     }} /> Quero saber mais sobre a Certificação Americana
                    </CtaButton>
                    
                </div>
            </Content>
        </Container>
    );
}