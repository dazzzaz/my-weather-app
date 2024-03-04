import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class Cards extends Component {
    render() {
        return (
            <div>
                <Card className="text-center" bg="dark">
                    <Card.Header></Card.Header>
                    <Card.Body className="text">
                            <Card.Title>Экзаменационное задание</Card.Title>
                            <Card.Text>
                                ст. гр. 10702120 Ашейчик Дарья Сергеевна
                            </Card.Text>
                            <Button href="/weather" variant="secondary">Перейдя по следующим страницам Вы можете увидеть Мою работу</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>
        )
    }
}
