import React, { useEffect } from 'react';
import socket from '../../config/socket';
import { Form } from '@rocketseat/unform';
import { Card, Row, Col, Table, DatePicker } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';

export default function Reports() {
  useEffect(() => {
    socket.on('message', function(message) {
      console.log(message);
    });
  }, []);

  const dataSource = [
    {
      key: '1',
      tipo: 'ALVARÁ DO OPERADOR DE ESTIVA',
      quantidade: 10,
      data: '17/01/2020 17:43 hrs',
    },
    {
      key: '2',
      tipo: 'ALVARÁ DO ARMADOR DE CABOTAGEM',
      quantidade: 15,
      data: '17/01/2020 15:55 hrs',
    },
    {
      key: '3',
      tipo: 'ALVARÁ DO TRANSITÁRIO',
      quantidade: 20,
      data: '17/01/2020 15:43 hrs',
    },
  ];

  const columns = [
    {
      title: 'Tipo de Licença',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantidade',
      key: 'quantidade',
    },
    {
      title: 'Data da Última Emissão',
      dataIndex: 'data',
      key: 'data',
    },
  ];

  const { RangePicker } = DatePicker;

  return (
    <Form>
      <Card title="Relatórios">
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }}>
            <center>
              <b>Filtrar por período: </b>
              <br />
              <RangePicker
                locale={locale}
                placeholder={['Data inicial', 'Data final']}
                ranges={{
                  Hoje: [moment(), moment()],
                  'Este mês': [moment().startOf('mês'), moment().endOf('mês')],
                }}
              />
            </center>
            <br />
            <Table position="top" dataSource={dataSource} columns={columns} />
            <span><h2 style={{ textAlign: 'right' }}>Total de emissões: 45</h2></span>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
