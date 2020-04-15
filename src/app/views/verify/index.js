import React, { useEffect } from 'react';
import socket from '../../config/socket';
import { Form } from '@rocketseat/unform';
import { Card, Row, Col, Icon } from 'antd';
import QRCode from 'qrcode.react';

export default function Verify() {
    useEffect(() => {
        socket.on('message', function (message) {
            console.log(message);
        });
    }, []);

    const hash = require('object-hash');
    const code = hash({ foo: 'bar' });

    return (
        <Form>
            <Card title="Verificador de Autenticidade">
                <Row>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }}>
                        <center>
                            <h1>Hashcode do último documento: {code}</h1>
                            <QRCode value={code} />
                        </center>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }}>
                        <p style={{ fontSize: '24px', color: '#07bc4c', textAlign: 'center' }}><b>DOCUMENTO VÁLIDO &nbsp;</b>
                            <Icon type="check" style={{ color: '#07bc4c', fontSize: '35px' }} />
                        </p>
                    </Col>
                </Row>
            </Card>
        </Form>
    );
}
