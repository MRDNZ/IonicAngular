module.exports = () => {
  const events = create(random(10), event);
  return { events };
}

const build = entity => (slot, index) => entity(index);
const repeat = (n, fn) => Array(n).fill(0).map(fn);
const create = (n, entity) => repeat(Math.floor(n), build(entity));
const random = number => Math.random() * number + 1;
const float = (value, decimal) => parseFloat(value).toFixed(decimal)

const event = (i) => ({
  id: i,
  date: new Date(),
  budget: float(random(500), 2),
  resources: create(random(3), resource),
  categories: create(random(3), category),
  type: '',
  status: 0,
  groups: create(random(3), group),
  ...timestamps()
});

const resource = (i) => ({
  id: i,
  company: company(i),
  invoices: create(random(3), document),
  quotes: create(random(3), document),
  status: 0,
  category: '',
  ...timestamps()
});

const company = (i) => ({
  id: i,
  naw: '',
  category: '',
  ...timestamps()
});

const document = (i) => ({
  id: i,
  price: float(random(50), 2),
  file: `file-${i}.pdf`,
  status: 0,
  date: new Date(),
  ...timestamps()
});

const category = (i) => ({
  id: i,
  budget: float(random(50), 2),
  name: '',
  ...timestamps()
});

const group = (i) => ({
  id: i,
  name: '',
  guests: create(random(10), guest),
  ...timestamps()
});

const guest = (i) => ({
  id: i,
  guest_info: '',
  ...timestamps()
});

const timestamps = () => ({
  create_date: new Date(),
  update_date: new Date(),
  remove_date: new Date()
});
