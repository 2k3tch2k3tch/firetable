# Firetable Roadmap

## POC ✅

### Initial fields:

- checkbox(boolean) ✅
- simple text(string) ✅
- email(string) ✅
- phone(string) ✅
- url(string) ✅
- Number(number) ✅
- long text(string) ✅

### Functionality:

- Create Tables (Primary collections) ✅
- Create columns (fields) ✅
- Create rows(documents) ✅
- Edit cells ✅
- Authenticate ✅
- Delete rows ✅

## MVP

### additional fields:

- single select(string)✅
- Multiple select(array of strings)✅
- date(Firebase timestamp)✅
- time(Firebase timestamp)✅
- file (single) ✅
- image (single) ✅
- single select reference(DocReference)🏗️
- multi select reference(DocReference)✅
- rating ✅

### Functionality:

- Delete columns✅
- Edit columns✅
- Fixed column
- Hide/Show columns
- resizable column ✅
- keyboard cell navigation ✅
- column / table Create/edit validation
- On new table add, refresh view to the table view✅
- import csv to table✅

## V1

### additional fields:

- file (multi)
- image (multi)
- Duration
- Percentage(number)
- Slider(number)
- Table(Document[])
- Rich Text(html string)

### Functionality:

- Sort rows
- reorder columns✅
- Locked columns
- Table view only mode
- SubCollection tables
- Permissions
- Duplicate columns
- Filters:
  - equals to
  - Starts with
  - contains
- Export tables to csv

# V+

### Additional Fields:

- currency
- count(docs in collection)
- index(number)
- meta fields:
  - createdAt
  - createdBy
  - updatedAt
  - updatedBy

### Functionality:

- Themes
- Table templates
- Dialog View of a row
