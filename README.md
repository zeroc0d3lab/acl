# Laravel ACL (Access Control List)

## Installation

```bash
composer require zeroc0d3lab/acl
```

For version <= 5.4:

Add to section `providers` of `config/app.php`:

```php
// config/app.php
'providers' => [
    ...
    Zeroc0d3lab\ACL\Providers\AclServiceProvider::class,
];
```

And add to `aliases` section:

```php
// config/app.php
'aliases' => [
    ...
    'ACL' => Zeroc0d3lab\ACL\Facades\AclFacade::class,
];
```

## License
[MIT](LICENSE) © ZeroC0D3 Team
