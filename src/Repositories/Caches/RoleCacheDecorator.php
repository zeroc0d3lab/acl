<?php

namespace Zeroc0d3lab\ACL\Repositories\Caches;

use Zeroc0d3lab\ACL\Repositories\Interfaces\RoleInterface;
use Zeroc0d3lab\Support\Repositories\Caches\CacheAbstractDecorator;

class RoleCacheDecorator extends CacheAbstractDecorator implements RoleInterface
{
    /**
     * {@inheritdoc}
     */
    public function createSlug($name, $id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}
