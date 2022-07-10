import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));


export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" width={"100%"} style={{ marginTop: -48 }} />
      <Typography variant="h6" marginTop={10}>
        Lucky Cat has the highest rewards and lowest fees. 
      </Typography>
      <Typography variant="h6" marginTop={5}>
          LuckyCat Token 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://pancakeswap.finance/swap?outputCurrency=0xA1Bb1Acc376718fd17bD449a3121c25A26a4d974';
              }}
              >
                  Buy on Pancakeswap
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://poocoin.app/tokens/0xA1Bb1Acc376718fd17bD449a3121c25A26a4d974';
              }}
              >
                  Chart
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://lucky.luckycat.money/';
              }}
              >
                  LuckyCat Miner
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        BNB CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://busd.luckycat.money/';
              }}
              >
                  BUSD MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://bnb.luckycat.money/';
              }}
              >
                  BNB MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://shib.luckycat.money/';
              }}
              >
                  SHIB MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://cake.luckycat.money/';
              }}
              >
                  CAKE MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://eth.luckycat.money/';
              }}
              >
                  ETH MINER
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        MILK CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://ada.luckycat.money/';
              }}
              >
                  ADA MINER
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        FANTOM CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://ftm.luckycat.money/';
              }}
              >
                  FTM MINER
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        AVAX CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://avax.luckycat.money/';
              }}
              >
                  AVAX MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://joe.luckycat.money/';
              }}
              >
                  JOE MINER
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        CRONOS CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://cro.luckycat.money/';
              }}
              >
                  CRO MINER
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        MATIC CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://matic.luckycat.money/';
              }}
              >
                  MATIC MINER
            </Button>
        </Grid>
      </ButtonContainer>
    </Wrapper>
  );
}
