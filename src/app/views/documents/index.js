import React, { useEffect, useRef } from 'react';
import socket from '../../config/socket';
import { Form } from '@rocketseat/unform';
import { Card, Row, Col, Divider, Button, Icon } from 'antd';
import angola from '../../images/angola.png';
import assinatura from '../../images/assinatura.png';
import QRCode from 'qrcode.react';
import ReactToPrint from 'react-to-print';

class A4 extends React.Component {
    render() {
        return (
            <div className="folha-a4">
                <center>
                    <img style={{ width: '90px' }} src={angola} alt="Angola" />
                    <h3 style={{ color: '#325c0e' }}>REPÚBLICA DE ANGOLA</h3>
                    <Divider style={{ width: '100px', background: '#325c0e' }} />
                    <h2 style={{ fontWeight: 'bold', color: '#325c0e' }}>MINISTÉRIO DOS TRANSPORTES</h2>
                    <h2 style={{ color: '#325c0e' }}>INSTITUTO MARÍTIMO E PORTUÁRIO DE ANGOLA</h2>
                    <h1 style={{ color: '#325c0e' }}>ALVARÁ DO OPERADOR DE ESTIVA</h1>
                    <br />
                    <h1 style={{ color: '#325c0e' }}>N.°</h1>
                    <br />
                </center>
                <p style={{ fontSize: '17px' }}>
                    Tendo sido cumpridas as disposições legais em vigor *variável*, faço saber que por despacho
                    de S.ª Excia. o senhor ministro do transporte *data* foi autorizada a concessão à Empresa
                    *variável* com sede social em *variável* do Alvará para o exercício da actividade de OPERADOR
                    DE ESTIVA em *variável*.
                </p>
                <p style={{ fontSize: '17px' }}>
                    E para constar o abrigo do artigo n.° *variável* do Decreto executivo n.° *variável* mandei
                    passar o presente documento, válido por cinco anos.
                </p>
                <br />
                <p style={{ fontSize: '17px' }}>
                    Luanda, *dataporextenso*
                </p>
                <br />
                <Row>
                    <Col xs={{ span: 12 }} lg={{ span: 12 }} sm={{ span: 24 }}>
                        <center>
                            <p style={{ fontSize: '17px' }}>
                                <b>O DIRETOR GERAL</b>
                                <br />
                                <img src={assinatura} alt="Assinatura" />
                            </p>
                        </center>
                    </Col>
                    <Col xs={{ span: 12 }} lg={{ span: 12 }} sm={{ span: 24 }}>
                        <center>
                            <p style={{ fontSize: '17px' }}>
                                <b>VERIFICADOR DE AUTENTICIDADE</b>
                                <br />
                                <QRCode value="https://qr-security.netlify.com/verify" />
                            </p>
                        </center>
                    </Col>
                </Row>
                <br />
                <p style={{ fontSize: '17px' }}>
                    Concedido a *variável* Processo n.° *variável* <br />
                    Capital Social *variável* Sede Social *variável* n.° *variável* <br />
                    Rua *variável* Filiais *variável* <br />
                    Porto de *variável* <br /><br />
                    OBS: <br />
                </p>
            </div>
        );
    }
}

export default function Documents() {
    useEffect(() => {
        socket.on('message', function (message) {
            console.log(message);
        });
    }, []);

    const componentRef = useRef();

    return (
        <Form>
            <Card title="Documentos">
                <Row>
                    <Col xs={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }}>
                        <ReactToPrint
                            trigger={() => <Button><Icon type="printer" />Imprimir Documento</Button>}
                            content={() => componentRef.current}
                        />
                        <br /><br />
                        <A4 ref={componentRef} />
                    </Col>
                </Row>
            </Card>
        </Form>
    );
}
