<?php

namespace Zeroc0d3lab\ACL\Repositories\Interfaces;

use Zeroc0d3lab\Support\Repositories\Interfaces\RepositoryInterface;

interface RoleInterface extends RepositoryInterface
{
    /**
     * @param string $name
     * @param int|null $id
     * @return string
     */
    public function createSlug($name, $id);
}
