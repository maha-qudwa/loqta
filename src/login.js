import React, {Component} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Badge, Item, Input, Form, Label  } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const logo = require("../assets/loqta-logo-white.png");

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={styles.content}>
          <Image source={logo} style={styles.logo}/>
          <Form>
            <Item floatingLabel style={styles.mb15}>
              {/* <Icon active name="keypad" style={{ color: "white" }} /> */}
              <Label placeholderTextColor="#f8bbd0" style={styles.colorWhite}>رقم الجوال (مثال: 0591234567)</Label>
              <Input style={styles.colorWhite}/>
            </Item>
            <Button block warning style={styles.mb15} onPress={this.submit}>
              <Text>تسجيل الدخول</Text>
            </Button>
            <Button block primary style={styles.mb15} onPress={this.submit}>
              <Text>الدخول كضيف</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A32A5F",  
  },
  content:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch'
  },
  logo: {
    height: 60, 
    width: 160, 
    alignSelf:'center', 
    marginBottom:50
  },
  mb15: {
    marginBottom: 20
  },
  colorWhite: {
    color: 'white'
  }
});