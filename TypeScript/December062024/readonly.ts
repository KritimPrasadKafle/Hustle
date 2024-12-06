interface Config {
  endpoint: string;
  apikey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apikey: "abcdef123456",
};
// config.apikey = "432234";
