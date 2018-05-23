import React, {Component} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Badge, Item, Input  } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Collection extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon active name="menu" />
            <Input placeholder="البحث في متجر لقطة.." />
            <Icon active name="search" />
          </Item>
          <Left>
            <Button transparent>
              <Icon name="cart" />
            </Button>
          </Left>
        </Header>
        <Content padder>
          <Grid>
            <Row>
              <Col>
                <Card>
                  <CardItem cardBody>
                    <Image source={{uri: 'https://cdn.shopify.com/s/files/1/1198/1452/products/Viennois-Gold-Color-Round-Circle-Dangle-Earrings-for-Woman-Simulated-Pearl-Elegant-Earrings-Fashion-Jewelry-5_grande.jpg?v=1518513953'}} style={{height: 200, width: 200, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                      حلق طويل باللون الذهبي متدلي ...
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Text>$11.05</Text>
                    </Right>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem cardBody>
                    <Image source={{uri: 'https://cdn.shopify.com/s/files/1/1198/1452/products/20170805131235_grande.jpg?v=1518514029'}} style={{height: 200, width: 200, flex: 2}}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                      طقم مجوهرات عقد و حلق بشكل ...
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Text>$11.05</Text>
                    </Right>
                    <Left>
                      <Text style={{ textDecorationLine: 'line-through', color:'gray', marginLeft:0 }}>$10.5</Text>
                    </Left>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardItem cardBody>
                    <Image source={{uri: 'https://cdn.shopify.com/s/files/1/1198/1452/products/Viennois-New-Gold-Silver-Color-Cuff-Bangle-for-Women-Hollow-Out-Wide-Female-Bracelets-Bangles-Mixed-5_grande.jpg?v=1518513939'}} style={{height: 200, width: 200, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                      طقم مجوهرات عقد و حلق بشكل ...
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Text>$11.05</Text>
                    </Right>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem cardBody>
                    <Image source={{uri: 'https://cdn.shopify.com/s/files/1/1198/1452/products/20170805151845_grande.jpg?v=1518513922'}} style={{height: 200, width: 200, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                      طقم مجوهرات عقد و حلق بشكل ...
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Text>$11.05</Text>
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>
          
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="keypad" />
              <Text>الرئيسية</Text>
            </Button>
            <Button vertical>
              <Icon name="paper" />
              <Text>الطلبات</Text>
            </Button>
            <Button vertical>
              <Icon active name="bookmarks" />
              <Text>المفضلة</Text>
            </Button>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="cart" />
              <Text>السلة</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
