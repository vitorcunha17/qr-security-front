import React, { useEffect } from 'react';
import socket from '../../config/socket';
import { Form } from '@rocketseat/unform';
import { Card, Row, Col } from 'antd';
import { Editor as EditorText } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function Editor() {
    useEffect(() => {
        socket.on('message', function (message) {
            console.log(message);
        });
    }, []);

    return (
        <Form>
            <Card title="Editor">
                <Row>
                    <Col xs={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }}>
                        <EditorText
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                        />
                    </Col>
                </Row>
            </Card>
        </Form>
    );
}
