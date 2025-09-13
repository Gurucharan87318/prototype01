import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://ourapp:S.Gurucharan%402004@aws-1-ap-south-1.pooler.supabase.com:6543/postgres',
});

client.connect()
  .then(() => {
    console.log('✅ Connected to Supabase DB');
    return client.end();
  })
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
  });