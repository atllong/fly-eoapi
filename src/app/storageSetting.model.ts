export const demoApi = [
  {
    name: 'JSON',
    protocol: 'http',
    method: 'GET',
    uri: 'http://demo.gokuapi.com:8280/Web/Test/all/{print}',
    groupID: 0,
    projectID: 1,
    requestBodyType: 'json',
    requestBodyJsonType: 'object',
    requestBody: [
      { name: 'string', value: '', description: '', type: 'string', required: true, example: '' },
      {
        name: 'array',
        required: true,
        example: '',
        type: 'array',
        description: '',
        children: [
          { name: 'dom1', required: true, example: '', type: 'object', description: '' },
          {
            name: 'dom2',
            value: false,
            description: '',
            type: 'boolean',
            required: true,
            example: 'false',
          },
          { name: 'dom3', required: true, example: '', type: 'array', description: '' },
        ],
      },
      {
        name: 'object',
        required: true,
        example: '',
        type: 'object',
        description: '',
        children: [
          { name: 'dom1', value: '', description: '', type: 'string', required: true, example: '' },
          { name: 'dom2', value: 0, description: '', type: 'number', required: true, example: '11.11' },
        ],
      },
      { name: 'null', value: null, description: '', type: 'null', required: true, example: '' },
      { name: 'float', value: 11.11, description: '', type: 'number', required: true, example: '11.11' },
      { name: 'int', value: 1, description: '', type: 'number', required: true, example: '11' },
      { name: 'boolean', value: false, description: '', type: 'boolean', required: true, example: 'true' },
    ],
    queryParams: [],
    restParams: [{ enum: [{ default: true }], name: 'print', required: true, example: 'print', description: '' }],
    requestHeaders: [
      {
        enum: [{ default: true }],
        name: 'cookie',
        required: true,
        example: 'cookie',
        description: '请求 Cookie',
      },
    ],
    responseHeaders: [],
    responseBodyType: 'json',
    responseBodyJsonType: 'object',
    responseBody: [],
    weight: 0,
    createdAt: '2022-01-04T02:17:47.695Z',
    updatedAt: '2022-01-11T11:29:39.113Z',
    uuid: 1,
  },
  {
    name: 'FormData',
    protocol: 'http',
    method: 'POST',
    uri: 'http://demo.gokuapi.com:8280',
    groupID: 0,
    projectID: 1,
    requestBodyType: 'formData',
    requestBodyJsonType: 'object',
    requestBody: [
      {
        name: 'projectType',
        value: '',
        description: '',
        type: 'string',
        required: true,
        example: '1',
        listDepth: 0,
        enum: [
          { default: true, value: '0', description: '免费' },
          { default: false, value: '1', description: '专业版' },
          { default: false, value: '2', description: '企业版' },
          { default: false, value: '', description: '' },
        ],
      },
      {
        name: 'file',
        value: '',
        description: '',
        type: 'file',
        required: true,
        example: '',
        listDepth: 0,
      },
    ],
    queryParams: [],
    restParams: [{ name: 'print', required: true, example: '', description: '' }],
    requestHeaders: [],
    responseHeaders: [],
    responseBodyType: 'json',
    responseBodyJsonType: 'object',
    responseBody: [],
    weight: 1,
    createdAt: '2022-01-04T02:17:47.695Z',
    updatedAt: '2022-01-11T11:29:39.113Z',
    uuid: 2,
  },
  {
    name: 'Raw',
    protocol: 'http',
    method: 'GET',
    uri: 'http://demo.gokuapi.com:8280',
    groupID: 0,
    projectID: 1,
    requestBodyType: 'raw',
    requestBodyJsonType: 'object',
    requestBody: 'i am raw',
    queryParams: [],
    restParams: [],
    requestHeaders: [],
    responseHeaders: [],
    responseBodyType: 'json',
    responseBodyJsonType: 'object',
    responseBody: [],
    weight: 3,
    createdAt: '2022-01-04T02:17:47.695Z',
    updatedAt: '2022-01-11T11:29:39.113Z',
    uuid: 3,
  },
  {
    name: 'XML',
    projectID: 1,
    uri: 'http://demo.gokuapi.com:8280',
    groupID: 0,
    protocol: 'http',
    method: 'POST',
    requestBodyType: 'xml',
    requestBodyJsonType: 'object',
    requestBody: [{ name: 'fsdfsf', type: 'string', required: true, example: '', enum: [], description: '' }],
    queryParams: [],
    restParams: [{ name: 'print', required: true, example: '', description: '' }],
    requestHeaders: [],
    responseHeaders: [],
    responseBodyType: 'json',
    responseBodyJsonType: 'object',
    responseBody: [],
    weight: 2,
    createdAt: '2022-01-11T10:11:00.670Z',
    updatedAt: '2022-01-11T11:29:39.113Z',
    uuid: 4,
  },
];