import React, { useEffect, useState } from 'react';
import socket from '../../config/socket';
import { Form } from '@rocketseat/unform';
import { Card, Row, Col, Input, Button, Icon, Radio, Upload, message, Divider } from 'antd';
import SignaturePad from 'react-signature-pad';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    socket.on('message', function(message) {
      console.log(message);
    });
  }, []);
  
  const [assTipo, setAssTipo] = useState("upload")

  function handleSizeChange (e) {
    setAssTipo(e.target.value)
  }

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  }

  return (
    <Form>
      <Card title="Home">
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }}>
            <h2 style={{ textAlign: 'center' }}>
              ALVARÁ DO OPERADOR DE ESTIVA
            </h2>
            <br />
            <Col xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }}>
              <div style={{ margin: '3px' }}>
                <Input className="input-margin" placeholder="N.°" />
                <Input className="input-margin" placeholder="Nome completo" />
                <Input className="input-margin" placeholder="Data" />
                <Input className="input-margin" placeholder="Nome da empresa" />
                <Input className="input-margin" placeholder="Sede da empresa" />
                <Input
                  className="input-margin"
                  placeholder="Local da atividade"
                />
                <Input className="input-margin" placeholder="Artigo N.°" />
                <Input
                  className="input-margin"
                  placeholder="Decreto executivo N.°"
                />
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }}>
              <div style={{ margin: '3px' }}>
                <Input className="input-margin" placeholder="Consedido a" />
                <Input className="input-margin" placeholder="Processo N.°" />
                <Input className="input-margin" placeholder="Capital social" />
                <Input className="input-margin" placeholder="Sede social" />
                <Input className="input-margin" placeholder="Rua" />
                <Input className="input-margin" placeholder="Filiais" />
                <Input className="input-margin" placeholder="Porto de" />
                <Input className="input-margin" placeholder="OBS:" />
              </div>
              <br />
            </Col>
            <center>
              <Radio.Group value={assTipo} onChange={handleSizeChange}>
                <Radio.Button value="upload">Upload de Assinatura</Radio.Button>
                <Radio.Button value="branco">Em branco</Radio.Button>
                <Radio.Button value="digital">Assinar Digitalmente</Radio.Button>
              </Radio.Group>
              <br />
              <br />
              <p style={{ fontSize: '16px' }}>
                <b>O DIRETOR GERAL</b>
                <br />
                {assTipo === "digital" &&
                  <SignaturePad clearButton />
                }
                {assTipo === "branco" &&
                  <div style={{ height: '150px' }} />
                }
                {assTipo === "upload" &&
                  <Upload {...props}>
                    <Button>
                      <Icon type="upload" /> Click para fazer Upload
                    </Button>
                  </Upload>
                }
              </p>
            </center>
            <center>
              <Divider />
              <br />
              <Link to="/documents">
                <Button type="primary" size="large" style={{ margin: '0 auto' }}>
                  <Icon type="file" />
                  Gerar Documento
                </Button>
              </Link>
            </center>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
