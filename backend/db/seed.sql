INSERT OR IGNORE INTO profile (
  id,
  full_name,
  title,
  bio,
  location,
  email,
  linkedin,
  github,
  website
) VALUES (
  1,
  'Stacey Norwa',
  'ERPNext Engineer',
  'ERPNext specialist with a CS background. I build production-grade ERP systems with reliable workflows, clean data models, and strong reporting.',
  'Nairobi, Kenya',
  'staceymarrion2002@gmail.com',
  'https://linkedin.com/in/yourprofile',
  'https://github.com/yourprofile',
  'https://your-portfolio.com'
);

INSERT OR IGNORE INTO skills (id, name, category, level, sort_order) VALUES
  (1, 'ERPNext', 'ERP', 'Advanced', 1),
  (2, 'MariaDB', 'Database', 'Advanced', 2),
  (3, 'SQL', 'Database', 'Advanced', 3),
  (4, 'Workflow Design', 'ERP', 'Advanced', 4),
  (5, 'Report Builder', 'ERP', 'Advanced', 5),
  (6, 'Role Permissions', 'ERP', 'Advanced', 6);

INSERT OR IGNORE INTO projects (
  id,
  title,
  summary,
  description,
  role,
  scope,
  stack,
  data_path,
  results,
  tags,
  sort_order
) VALUES
  (
    1,
    'ERPNext Core Implementation',
    'Finance, Buying, Selling, Inventory modules',
    'Implemented core modules and reporting tailored to daily operations.',
    'ERP Engineer',
    'Finance, Buying, Selling, Inventory',
    'ERPNext, Python, MariaDB',
    'Lead -> Quotation -> Sales Order -> Invoice -> Payment',
    '["Unified document flow across modules","Traceable data from quote to invoice","Stable reporting with clean data"]',
    '["ERPNext","Process Design","Dashboards"]',
    1
  ),
  (
    2,
    'HR and Payroll Configuration',
    'HR, Payroll, Attendance workflows',
    'Configured HR, payroll, and attendance with permissions, rules, and validations.',
    'ERP Engineer',
    'HR, Payroll, Attendance, Permissions',
    'ERPNext, MariaDB',
    'Employee -> Attendance -> Payroll Entry -> Payslip',
    '["Validated attendance workflows","Accurate payroll runs","Audit-ready records"]',
    '["HR","Payroll","Permissions"]',
    2
  );

INSERT OR IGNORE INTO education (id, school, degree, field, details) VALUES
  (
    1,
    'St. Pauls University',
    'Bachelor',
    'Computer Science',
    'Focused on software engineering, databases, and systems design.'
  );
